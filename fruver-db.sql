-- Crear la base de datos
CREATE DATABASE fruver;

-- Usar la base de datos fruver
USE fruver;

-- Crear la tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('F', 'V', 'G') NOT NULL COMMENT 'Tipo de producto: Frutas (F), Verduras (V) o Granos (G)',
    nombre VARCHAR(50) NOT NULL COMMENT 'Nombre del producto',
    descripcion VARCHAR(250) NOT NULL COMMENT 'Descripción del producto',
    valor_unitario DECIMAL(10, 2) NOT NULL COMMENT 'Valor unitario del producto',
    cantidad_stock INT NOT NULL COMMENT 'Cantidad en stock del producto',
    UNIQUE INDEX idx_tipo_nombre (tipo, nombre)
);

-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cedula VARCHAR(20) UNIQUE NOT NULL COMMENT 'Cédula del usuario',
    tipo ENUM('C', 'A', 'V') NOT NULL COMMENT 'Tipo de usuario: Cliente (C), Administrador (A) o Ventas (V)',
    UNIQUE INDEX idx_tipo_cedula (tipo, cedula)
);

-- Crear la tabla de carros de compras
CREATE TABLE carro_compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL COMMENT 'ID del cliente',
    estado ENUM('P', 'F') NOT NULL COMMENT 'Estado del carro de compras: Pendiente (P) o Finalizado (F)',
    FOREIGN KEY (cliente_id) REFERENCES usuarios(id) -- Relación con la tabla de usuarios
);

-- Crear la tabla para la relación entre carros de compras y productos
CREATE TABLE carro_compras_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carro_compras_id INT NOT NULL COMMENT 'ID del carro de compras',
    producto_id INT NOT NULL COMMENT 'ID del producto',
    cantidad_producto INT NOT NULL COMMENT 'Cantidad del producto en el carro de compras',
    FOREIGN KEY (carro_compras_id) REFERENCES carro_compras(id), -- Relación con la tabla de carros de compras
    FOREIGN KEY (producto_id) REFERENCES productos(id) -- Relación con la tabla de productos
);

-- Crear la tabla de facturas
CREATE TABLE facturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carro_compras_id INT NOT NULL COMMENT 'ID del carro de compras asociado a la factura',
    monto_total DECIMAL(10, 2) NULL COMMENT 'Monto total de la factura',
    FOREIGN KEY (carro_compras_id) REFERENCES carro_compras(id) -- Relación con la tabla de carros de compras
);



-- Crear el disparador que actualiza la factura y reduce el stock antes de que se agregue una nueva factura
DELIMITER //
CREATE TRIGGER tr_actualizar_monto_y_stock
BEFORE INSERT ON facturas
FOR EACH ROW
BEGIN
    -- Calcular el monto_total en la factura
    SET NEW.monto_total = (
        SELECT SUM(p.valor_unitario * ccp.cantidad_producto)
        FROM carro_compras_productos ccp
        INNER JOIN productos p ON ccp.producto_id = p.id
        WHERE ccp.carro_compras_id = NEW.carro_compras_id
    );

    -- Reducir el stock del producto
    UPDATE productos p
    SET p.cantidad_stock = p.cantidad_stock - (
        SELECT ccp.cantidad_producto
        FROM carro_compras_productos ccp
        WHERE ccp.carro_compras_id = NEW.carro_compras_id AND ccp.producto_id = p.id
    )
    WHERE p.id IN (
        SELECT producto_id
        FROM carro_compras_productos
        WHERE carro_compras_id = NEW.carro_compras_id
    );
    
    -- Finalizar la compra
    UPDATE carro_compras
    SET estado = 'F'
    WHERE id = NEW.carro_compras_id;
END;
//
DELIMITER ;

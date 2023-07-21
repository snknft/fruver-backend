import { Sequelize } from "sequelize";

const sequelize = new Sequelize('fruver', 'olopez', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

export {
    sequelize
}
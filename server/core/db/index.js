import Sequelize from 'sequelize';
import { getConfig } from '../../config';

const env = process.env.NODE_ENV;
const config = getConfig(env);

const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, {
    host: config.db.host,
    port: config.db.port,
    dialect: 'postgres'
});

export default {
    sequelize: sequelize,
    Sequelize: Sequelize
};

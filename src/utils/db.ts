import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  database: 'db_w83c',
  username: 'crusaders',
  host: 'dpg-cl2b33rmgg9c73egs8d0-a.frankfurt-postgres.render.com',
  password: 'ggcH25q8P4X8AQrFkSCWqR0zP4sgWmvz',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log(process.env);
    console.log('Connection has been established successfully.');
    return sequelize;
  } catch (error) {
    throw new Error('Unable to connect to the database:');
  }
}

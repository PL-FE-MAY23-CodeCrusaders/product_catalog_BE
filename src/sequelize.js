import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'dpg-cl00i43amefc73cge3v0-a',
  port: 5432,
  database: 'db_w83c',
  username: 'crusaders',
  password: 'ggcH25q8P4X8AQrFkSCWqR0zP4sgWmvz',
});

// Function to test the database connection
async function connectionTest() {
  try {
    await sequelize.authenticate();
    console.log('Połączenie zostało nawiązane.');
  } catch (error) {
    console.error('Połączenie nie udało się.', error);
  }
}

connectionTest();
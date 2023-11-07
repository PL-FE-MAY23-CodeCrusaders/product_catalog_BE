import { Sequelize } from 'sequelize';


// postgres://crusaders:
// ggcH25q8P4X8AQrFkSCWqR0zP4sgWmvz
// @dpg-cl2b33rmgg9c73egs8d0-a
// .frankfurt-postgres.render.com/
//  db_w83c

const sequelize = new Sequelize({
  database: 'db_w83c',
  dialect: 'postgres',
  host: 'dpg-cl2b33rmgg9c73egs8d0-a.frankfurt-postgres.render.com',
  port: 5432,
  username: 'crusaders',
  password: 'ggcH25q8P4X8AQrFkSCWqR0zP4sgWmvz',
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false,
    }
  }
});

// Function to test the database connection
export async function connectionTest() {
  try {
    await sequelize.authenticate();
    console.log('Połączenie zostało nawiązane.');
  } catch (error) {
    console.error('Połączenie nie udało się.', error);
  }
}

export { sequelize };

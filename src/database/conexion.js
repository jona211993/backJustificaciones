import sql from "mssql";

const dbSettings = {
  user: "jonatan",
  password: "jona092014",
  server: "localhost",
  database: "BD_RRHH",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

getConnection();

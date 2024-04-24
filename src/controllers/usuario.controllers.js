import { getConnection } from "../database/conexion.js";
export const getUsuarios = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM empleado");
  res.json(result.recordset);
};

export const getUsuarioByUserAndPassword = async (req, res) => {
  const { usuario, contrasenia } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("usuario", sql.VarChar, usuario)
      .input("contrasenia", sql.VarChar, contrasenia)
      .query(
        "SELECT * FROM empleado WHERE usuario=@usuario and contrasenia=@contrasenia"
      );
    res.json(result.recordset);
  } catch (error) {
    return res
    .status(400)
    .json({message: "no se encontro al usuario" });
  }
};

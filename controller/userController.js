import { User } from "../Models/index.js";

// import connection from "../connection/connection.js";
class UserController {
  constructor() { }
  getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll({ attributes: ["id", "name", "lastName", "mail"] });
      res.status(200).send({
        success: true,
        message: "Todos los roles que hay",
        data: users,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        where: { id },
        attributes: ["id", "name", "lastName", "mail"],
      });

      if (!user) throw new Error("No hay user con ese id");

      res.status(200).send({
        success: true,
        message: "User con id: " + id,
        data: user,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {
      const { name, lastName, mail } = req.body;
      //  if (!name) throw new Error("El name no puede estar vacio");
      //  console.log(`🚀 ~ RoleController ~ createRole= ~ name:`, name);
      const user = await User.create({ name, lastName, mail });
      if (!user) throw new Error("El user no puede estar vacio");

      res
        .status(200)
        .send({ success: true, message: "User creado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { name, lastName, mail } = req.body;
      const { id } = req.params;
      const user = await User.update(
        { name, lastName, mail },
        {
          where: { id },
        }
      );
      if (user[0] === 0) throw new Error("no se modifico nada");
      res
        .status(200)
        .send({ success: true, message: "User modificado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { name, lastName, mail } = req.body;
      const user = await User.destroy({
        where: { name, lastName, mail }
      });
      res
        .status(200)
        .send({ success: true, message: "User " + user + " borrado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}


export default UserController;

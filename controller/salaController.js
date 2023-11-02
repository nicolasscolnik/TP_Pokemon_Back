import { where } from "sequelize";
import { Sala } from "../Models/index.js";

class SalaController {
  constructor() { }
  getAllSalas = async (req, res) => {
    try {
      const salas = await Sala.findAll({ attributes: ["id", "idUser1", "idUser2"] });
      res.status(200).send({
        success: true,
        message: "Todos las salas que hay",
        data: salas,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getSalaAvailable = async () => {
    try {
      const salaLibre = await Sala.findOne({where: idUser2 == null})
      res.status(200).send(salaLibre)
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  getSalaById = async (req, res) => {
    try {
      const { id } = req.params;
      const sala = await Sala.findOne({
        where: { id },
        attributes: ["id", "idUser1", "idUser2"],
      });

      if (!sala) throw new Error("No hay sala con ese id");

      res.status(200).send({
        success: true,
        message: "La sala",
        data: sala,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createSala = async (req, res) => {
    try {
      const { idUser1 } = req.body;
      const sala = await Sala.create({ idUser1 });
      if (!sala) throw new Error("La sala no puede estar vacio");

      res
        .status(200)
        .send({ success: true, message: "sala crerado", data: sala });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateSala = async (req, res) => {
    try {
      const { idUser1 } = req.params;
      const { idUser2 } = req.params;
      const { id } = req.params;
      const sala = await Sala.update(
        { idUser1 },
        { idUser2 },
        {
          where: { id },
        }
      );
      if (sala[0] === 0) throw new Error("no se modifico nada");
      res
        .status(200)
        .send({ success: true, message: "sala modificado", data: sala });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteSala = async (req, res) => {
    try {
      const { id } = req.params;
      const sala = await Sala.destroy({
        where: { id }
      });
      res
        .status(200)
        .send({ success: true, message: "sala " + id + " borrado", data: sala });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default SalaController;

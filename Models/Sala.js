import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Sala extends Model {}

Sala.init(
  {
    idUser1: {
      type: DT.STRING,
    },
    idUser2: {
      type: DT.STRING,
    },
  },
  {
    sequelize: connection, // Asegúrate de que 'connection' sea una instancia válida de Sequelize
    modelName: "Sala",
  }
);

export default Sala;

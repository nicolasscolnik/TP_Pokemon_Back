import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Sala extends Model {}

Sala.init(
  {
    idUser1: {
      type: DT.INTEGER,
      allowNull: false,
    },
    idUser2: {
      type: DT.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection, // Asegúrate de que 'connection' sea una instancia válida de Sequelize
    modelName: "Sala",
  }
);

export default Sala;

import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model {}

User.init(
  {
    name: {
      type: DT.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DT.STRING(50),
      allowNull: false,
    },
    mail: {
      type: DT.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

export default User;

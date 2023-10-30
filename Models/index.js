import Sala from "./Sala.js";
import User from "./User.js";

Sala.hasMany(User, {
     foreignKey: 'salaId',
});
User.belongsTo(Sala, {
     foreignKey:"salaId"
});

export { Sala, User };
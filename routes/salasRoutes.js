import { Router } from "express";
import SalaController from "../controller/salaController.js";
const salasRoutes = Router();
const salaController = new SalaController();

salasRoutes.get("", salaController.getAllSalas);
salasRoutes.get("/:id", salaController.getSalaById);
salasRoutes.post("/", salaController.createSala);
salasRoutes.put("/:id", salaController.updateSala);
salasRoutes.delete("/", salaController.deleteSala);

export default salasRoutes;

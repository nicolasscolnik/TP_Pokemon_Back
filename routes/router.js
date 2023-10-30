import { Router } from "express";
import usersRoutes from "./usersRoutes.js";
import salasRoutes from "./salasRoutes.js";


const router = Router()

router.use("/salas", salasRoutes)
router.use("/users", usersRoutes)

export default router
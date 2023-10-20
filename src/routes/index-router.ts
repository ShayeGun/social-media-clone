import { Router } from "express";
import { addNewUser } from "../controllers";
const router = Router();

router.route('/test')
    .post(addNewUser);

export { router as mainRouter };
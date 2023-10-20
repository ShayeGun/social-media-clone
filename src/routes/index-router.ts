import { Router } from "express";
import { addNewUser, selectUser } from "../controllers";
const router = Router();

router.route('/test')
    .post(addNewUser)
    .get(selectUser);

export { router as mainRouter };
import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catch-async";
import * as db from "../database";


export const testController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { rows } = await db.query('SELECT NOW()');
    res.json({
        data: "testing successful",
        result: rows
    });
});
import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catch-async";
import { postgres } from "../database";


export const addNewUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await postgres.insert('user', req.body);
    res.json({
        data: "testing successful",
        result: result
    });
});
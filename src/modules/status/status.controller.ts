import { Request, Response } from "express";
import { getServiceStatus } from "./status.service";

export function statusController(req: Request, res: Response) {
  const data = getServiceStatus();
  res.json(data);
}

import { server } from "../index";

import Router from "express";
import { Request, Response } from "express";

const projectInfo = Router();

projectInfo.get("/", async (req: Request, res: Response): Promise<Response> => {
  const getProjectInfo = server;
  return res.status(200).json(await getProjectInfo.projectInfo());
});

export { projectInfo };

import { Express, Request, Response } from "express";
import { BaseController } from "../base/Base.controller";

export class RecipeController extends BaseController {
  constructor(app: Express) {
    super(app);
  }

  async list(req: Request, res: Response) {}

  async get(req: Request, res: Response) {}

  async create(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}

  register() {
    this.app.get("/recipes", (req, res) => this.list(req, res));
    this.app.get("/recipes/:id", (req, res) => this.get(req, res));
    this.app.post("/recipes", (req, res) => this.create(req, res));
    this.app.delete("/recipes/:id", (req, res) => this.delete(req, res));
  }
}

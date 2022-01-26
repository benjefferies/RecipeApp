import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";

const app = express();

export class Application {
  constructor() {
    this.setupApplicationSettings();
    this.setupControllers();
  }

  async setupMongo() {
    const url = "mongodb://mongo:27017";
    const client = new MongoClient(url);
    const dbName = "myProject";
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("documents");
    collection.insertOne({ data: "blah" });
    console.log({ count: await collection.count() }, "NUmber of docs");
    // the following code examples can be pasted here...

    return "done.";
  }

  setupApplicationSettings() {
    app.use(cors());
    app.use(urlencoded({ extended: false }));
    app.use(json());
  }

  listen() {
    app.listen(3080, () => console.log("Listening on port 3080"));
  }

  setupControllers() {
    app.get("/recipes", async (req: Request, res: Response) => {
      await this.setupMongo();
      res.status(200).send("");
    });
    app.get("/recipes/:id", (req: Request, res: Response) => {
      res.status(200).send("");
    });
    app.post("/recipes", (req: Request, res: Response) => {
      res.status(200).send("");
    });
    app.delete("/recipes/:id", (req: Request, res: Response) => {
      res.status(200).send("");
    });
    app;
  }
}

const application = new Application();

application.listen();

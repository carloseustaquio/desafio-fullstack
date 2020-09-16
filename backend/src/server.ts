import "./util/module-alias";
import express from "express";
import { Server } from "@overnightjs/core";
import { Application } from "express";

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
    await this.databaseSetup();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void {
    // const forecastController = new ForecastController();
    // const beachesController = new BeachesController()
    // this.addControllers([forecastController, beachesController]);
  }

  private async databaseSetup(): Promise<void> {
    // await database.connect();
  }

  public async close(): Promise<void> {
    // await database.close();
  }

  public getApp(): Application {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log("Server listening of port: ", this.port)
    })
  }
}

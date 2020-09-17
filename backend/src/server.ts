import "./util/module-alias";
import "reflect-metadata"
import express from "express";
import { Server } from "@overnightjs/core";
import { Application } from "express";
import { createConnection } from "typeorm"
import { UserController } from "./controllers/UserController";
import { DBConnection } from "./util/db";

export class SetupServer extends Server {
  constructor(private port = 8080) {
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
    const userController = new UserController();
    this.addControllers([userController]);
  }

  private async databaseSetup(): Promise<void> {
    await DBConnection.create()
  }

  public async close(): Promise<void> {
    await DBConnection.close();
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

import { Application } from "express";
import express from "express";

class App {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || `3000`;
    this.settings();
    this.init();
  }

  settings() {}

  init() {
    this.app.listen(this.port, () =>
      console.log(`Express Server running on port ::${this.port}`)
    );
  }
}

const runApp = () => {
  new App();
};
runApp();

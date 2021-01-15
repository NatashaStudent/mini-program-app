import { Application } from "../declarations";
import dbService from "./db-service/db-service.service";
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(dbService);
}

import { Sequelize } from "sequelize";
import { Application } from "./declarations";

export default function configureSequelize(app: Application): void {
  const pgOptions = app.get("postgres");

  const sequelize = new Sequelize(
    pgOptions.database,
    pgOptions.username,
    pgOptions.password,
    {
      dialect: "postgres",
      dialectOptions: { useUTC: true },
      timezone: "+02:00",
      define: { underscored: true },
      host: pgOptions.host,
    }
  );
  const oldSetup = app.setup;

  app.set("sequelizeClient", sequelize);

  app.setup = function (...args): Application {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach((name) => {
      if ("associate" in models[name]) {
        (models[name] as any).associate(models);
      }
    });

    // Sync to the database
    app.set("sequelizeSync", sequelize.sync());

    return result;
  };
}

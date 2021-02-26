import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptios = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptios, {
      database:
        process.env.NODE_ENV === "test"
          ? "./src/database/database.test.sqlite"
          : defaultOptios.database,
    })
  );
};

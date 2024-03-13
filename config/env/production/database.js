module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-cno844i0si5c73b378t0-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "boasdb"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "4TGeWHq7kMJ4Zxr16c0Hqb9gFthjdOV8"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        ca: env("DATABASE_CA"),
      },
    },
    debug: false,
  },
});

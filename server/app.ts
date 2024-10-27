import { Hono } from "hono";

const app = new Hono()
  .route(
    "/api",
    new Hono().route(
      "",
      new Hono().get("a", async c => {})
    )
  )
  .get("/*", c => c.html("<html/>"));

export type App = typeof app;

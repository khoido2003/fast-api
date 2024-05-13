import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/search", (c) => {
  return c.json({});
});

// Handle when deploy to vercel
export const GET = handle(app);

// Handle when deploy to CLoudFlare
export default app as never;

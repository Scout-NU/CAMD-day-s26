import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "edcjwlqc",
  dataset: "prod",
});
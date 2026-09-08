import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "arca-wallet-blog",
  title: "Arca Wallet Blog",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), media()],
});

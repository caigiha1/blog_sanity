import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "TMQ_studio",
  title: "blog-sanity-nextjs13",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});

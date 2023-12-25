import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { EXTERNAL_LINKS } from "./src/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: EXTERNAL_LINKS.website,
});

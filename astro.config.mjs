import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), astroI18next(), image()]
});
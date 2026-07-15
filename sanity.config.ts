import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Dataverse Inc',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});

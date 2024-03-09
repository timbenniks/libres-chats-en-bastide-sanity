import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { frFRLocale } from '@sanity/locale-fr-fr'
import { presentationTool } from 'sanity/presentation'
import { locate } from './locate'

const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'

export default defineConfig({
  name: 'default',
  title: 'LibresChatsEnBastide',

  projectId: '9naj3yz0',
  dataset: 'production',

  plugins: [presentationTool({ previewUrl: SANITY_STUDIO_PREVIEW_URL, locate }), structureTool(), visionTool(), frFRLocale()],

  schema: {
    types: schemaTypes,
  },
})

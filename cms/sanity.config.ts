import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'
import { frFRLocale } from '@sanity/locale-fr-fr'
import { presentationTool } from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'LibresChatsEnBastide',

  projectId: '9naj3yz0',
  dataset: 'production',

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.NUXT_ORIGIN_URL || 'http://localhost:3000',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    frFRLocale()
  ],

  schema: {
    types: schemaTypes,
  },
})
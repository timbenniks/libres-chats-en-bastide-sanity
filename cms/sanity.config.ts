import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
// import { frFRLocale } from '@sanity/locale-fr-fr'
import { presentationTool } from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'LibresChatsEnBastide',

  projectId: '9naj3yz0',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    //frFRLocale()
  ],

  schema: {
    types: schemaTypes,
  },
})
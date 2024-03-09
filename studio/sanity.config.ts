import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { frFRLocale } from '@sanity/locale-fr-fr'


export default defineConfig({
  name: 'default',
  title: 'LibresChatsEnBastide',

  projectId: '9naj3yz0',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), frFRLocale()],

  schema: {
    types: schemaTypes,
  },
})

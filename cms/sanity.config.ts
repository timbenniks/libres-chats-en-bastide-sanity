import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'
import { frFRLocale } from '@sanity/locale-fr-fr'
import { presentationTool } from 'sanity/presentation'

//@ts-ignore
import { theme } from 'https://themer.sanity.build/api/hues?preset=pink-synth&default=a1bdf0&primary=01337f'

export default defineConfig({
  name: 'default',
  title: 'LibresChatsEnBastide',

  projectId: '9naj3yz0',
  dataset: 'production',

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.ORIGIN_URL || 'http://localhost:3000',
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
  theme
})
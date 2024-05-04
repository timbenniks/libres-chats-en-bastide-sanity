import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'
import { frFRLocale } from '@sanity/locale-fr-fr'
import { presentationTool } from 'sanity/presentation'
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

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
        origin: process.env.SANITY_STUDIO_ORIGIN_URL,
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    frFRLocale(),
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        projectUsersWidget(),
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: '3ef9decb-aa19-44ec-90cc-5935297dac9e',
              buildHookId: '663615c1412073dc71b09258',
              name: 'libres-chats-en-bastide-cms',
              url: "https://libres-chats-en-bastide-cms.netlify.app"
            },
            {
              title: 'Website',
              apiId: '79f84b62-3820-4aaa-a9ff-d7049666cea9',
              buildHookId: '66361615456725d517a1a7cf',
              name: 'libres-chats-en-bastide',
              url: 'https://libres-chats-en-bastide.netlify.app',
            }
          ]
        })
      ]
    })
  ],

  schema: {
    types: schemaTypes,
  },
  theme
})
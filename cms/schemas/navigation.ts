import { defineField, defineType } from 'sanity'

export default {
  name: "navigation",
  type: "document",
  title: "Navigation",
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [
        defineType({
          name: 'page',
          title: 'Page',
          type: 'object',

          fields: [
            defineField({
              name: 'menuLabel',
              title: 'Label',
              type: 'string'
            }),
            defineField({
              name: 'externalUrl',
              title: 'External URL',
              type: 'string'
            }),
            defineField({
              name: 'internalUrl',
              title: 'Internal URL',
              type: 'reference',
              to: [{ type: 'page' }],
            }),
          ]
        }),
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled'
      }
    },
  },
};
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'richText',
  type: 'object',
  title: 'Rich Text',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'blockContent'
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `${title || 'Untitled'}`,
        subtitle: "Rich Text component",
      }
    },
  },
})
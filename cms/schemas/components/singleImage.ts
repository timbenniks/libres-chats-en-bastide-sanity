import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'singleImage',
  type: 'object',
  title: 'Single Image',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        media: image,
      }
    },
  },
})
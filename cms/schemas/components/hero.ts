import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
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

    defineField({
      name: 'cta',
      type: 'object',
      title: 'Call to Action',
      fields: [
        defineField({ name: 'url', type: 'reference', to: [{ type: 'page' }], title: 'URL' }),
        defineField({ name: 'label', type: 'string', title: 'Label' }),
        defineField({ name: 'primary', type: 'boolean', title: 'Primary Button' })
      ]
    }),
    defineField({
      name: 'cta2',
      type: 'object',
      title: 'Secondary Call to Action',
      fields: [
        defineField({ name: 'url', type: 'reference', to: [{ type: 'page' }], title: 'URL' }),
        defineField({ name: 'label', type: 'string', title: 'Label' }),
        defineField({ name: 'primary', type: 'boolean', title: 'Primary Button' })
      ]
    }),


  ],
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image,
      }
    },
  },
})
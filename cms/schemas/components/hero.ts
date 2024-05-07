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
      name: 'small',
      title: 'Small Version',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'darkImageUsed',
      title: 'Dark Image Used',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'nospace',
      title: 'No space below',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: false },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),

    defineField({
      name: 'ctas',
      title: 'Calls To Action',
      type: 'array',
      of: [
        defineType({
          name: 'cta',
          title: 'Call To Action',
          type: 'object',
          fields: [
            defineField({ name: 'url', type: 'reference', to: [{ type: 'page' }], title: 'URL' }),
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'secondary', type: 'boolean', title: 'Secondary Button', initialValue: false }),
            defineField({ name: 'onDarkBackground', type: 'boolean', title: 'On Dark Background', initialValue: false })
          ]
        })
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
        title: `${title || 'Untitled'}`,
        subtitle: "Hero component",
        media: image,
      }
    },
  },
})
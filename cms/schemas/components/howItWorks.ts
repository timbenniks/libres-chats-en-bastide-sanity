import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'howItWorks',
  type: 'object',
  title: 'How It Works',
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
      name: 'steps',
      title: 'Steps',
      type: 'array',
      validation: (Rule) => Rule.max(3).warning('You can add up to 3 steps'),
      of: [
        defineType({
          name: 'step',
          title: 'Step',
          type: 'object',
          preview: {
            select: {
              title: 'name',
              image: 'image',
            },
            prepare({ title, image }) {
              return {
                title: title || 'Untitled',
                media: image,
              }
            },
          },
          fields: [
            defineField({ name: 'step', title: 'Step', type: 'number' }),
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({
              name: 'image',
              type: 'image',
              options: { hotspot: false },
            }),
          ]
        }),
      ]
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
            defineField({ name: 'secondary', type: 'boolean', title: 'Secondary Button' }),
            defineField({ name: 'onDarkBackground', type: 'boolean', title: 'On Dark Background' })
          ]
        })
      ]
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      step0: 'steps.0.image',
    },
    prepare({ title, step0 }) {
      return {
        title: `${title || 'Untitled'}`,
        subtitle: "How It Works component",
        media: step0,
      }
    },
  },
})
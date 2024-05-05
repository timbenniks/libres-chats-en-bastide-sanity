import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featuredCats',
  type: 'object',
  title: 'Featured Cats',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    {
      name: 'cats',
      type: 'array',
      title: 'Featured Cats',
      of: [
        {
          type: 'reference',
          to: [{ type: 'cat' }]
        }
      ],
      validation: (Rule) => Rule.max(3).warning('You can only select up to 3 cats')
    },
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
      cat0: 'cats.0.name',
      cat1: 'cats.1.name',
      cat2: 'cats.2.name',
      image: 'cats.0.images'
    },
    prepare({ title, cat0, cat1, cat2, image }) {
      const cats = [cat0, cat1, cat2].filter(Boolean)
      const subtitle = cats.length > 0 && cats.join(', ')
      return {
        title: `${title || 'Untitled'}`,
        subtitle: `Featured Cats component. Selected: ${subtitle}`,
        media: image[0]
      }
    },
  },
})
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
            defineField({ name: 'secondary', type: 'boolean', title: 'Secondary Button' })
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
        title: `Featured Cats: ${title || 'Untitled'}`,
        media: image,
      }
    },
  },
})
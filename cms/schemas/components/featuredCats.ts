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
    }
  ],
  preview: {
    select: {
      title: 'heading',
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
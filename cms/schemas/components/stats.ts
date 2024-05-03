import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'stats',
  type: 'object',
  title: 'Stats Blocks',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'statBlocks',
      title: 'Stat Blocks',
      type: 'array',
      validation: (Rule) => Rule.max(4).warning('You can add up to 4 blocks'),
      of: [
        defineType({
          name: 'statBlock',
          title: 'Stat Block',
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number', type: 'number' }),
            defineField({ name: 'name', title: 'Name', type: 'string' })]
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
        title: `Stats: ${title || 'Untitled'}`,
      }
    },
  },
})
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
      stat0: 'statBlocks.0.name',
      stat1: 'statBlocks.1.name',
      stat2: 'statBlocks.2.name',
      stat3: 'statBlocks.3.name'
    },
    prepare({ title, stat0, stat1, stat2, stat3 }) {
      const stats = [stat0, stat1, stat2, stat3].filter(Boolean)

      const subtitle = stats.length > 0 && stats.join(', ')
      return {
        title: `${title || 'Untitled'}`,
        subtitle: `Stats component. Selected: ${subtitle}`
      }
    },
  },
})
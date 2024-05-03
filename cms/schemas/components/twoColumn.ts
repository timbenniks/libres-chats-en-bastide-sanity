import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'twoColumn',
  title: 'Two Columns',
  type: 'object',
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
      name: 'sideA',
      title: 'Side A',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'singleImage',
          type: 'singleImage',
        }),
        defineArrayMember({
          name: 'richText',
          type: 'richText',
        })
      ],
    }),

    defineField({
      name: 'sideB',
      title: 'Side B',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'singleImage',
          type: 'singleImage',
        }),
        defineArrayMember({
          name: 'richText',
          type: 'richText',
        })
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Two Column: ${title || 'Untitled'}`,
      }
    },
  },
})
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
      name: 'background',
      title: 'Background color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'bg-lightBlue' },
          { title: 'Yellow', value: 'bg-yellow' }
        ],
      }
    }),
    defineField({
      name: 'sizes',
      title: 'Size of columns',
      type: 'string',
      options: {
        list: [
          { title: 'Both Sides are the same', value: 'sideSame' },
          { title: 'Side A Bigger', value: 'sideABigger' },
          { title: 'Side B Bigger', value: 'sideBBigger' },
        ],
      }
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
      sideA: 'sideA.0._type',
      sideB: 'sideB.0._type'
    },
    prepare({ title, sideA, sideB }) {
      return {
        title: `${title || 'Untitled'}`,
        subtitle: `Two Column compontent. Side A: ${sideA}, Side B: ${sideB}`
      }
    },
  },
})
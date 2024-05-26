import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'richText',
  type: 'object',
  title: 'Rich Text',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'blockContent'
    }),
    defineField({
      name: 'centered',
      title: 'Centered',
      type: 'boolean',
      description: "center the box on the screen",
      initialValue: false
    }),
    defineField({
      name: 'textcentered',
      title: 'Text Centered',
      type: 'boolean',
      description: "center the text in the box",
      initialValue: false
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
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `${title || 'Untitled'}`,
        subtitle: "Rich Text component",
      }
    },
  },
})
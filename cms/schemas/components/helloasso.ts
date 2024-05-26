import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'helloAsso',
  type: 'object',
  title: 'Hello Asso Form',
  fields: [
    defineField({
      name: 'source',
      title: "Source URL",
      type: 'string',
    })
  ]
})
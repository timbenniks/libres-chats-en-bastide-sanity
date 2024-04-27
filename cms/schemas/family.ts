import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'family',
  title: 'Family',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'address',
      type: 'text',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'familyType',
      title: 'Family Type',
      type: 'string',
      options: {
        list: [
          { title: 'Adoption', value: 'adoption' },
          { title: 'Host', value: 'host' },
          { title: 'Both', value: 'both' }
        ],
      }
    }),
  ]
});
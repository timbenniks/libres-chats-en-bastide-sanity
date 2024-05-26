import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'slug', type: 'slug' }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'description', type: 'string' }),

    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: false },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),

    defineField({
      name: 'components',
      type: 'array',
      title: 'Components',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'singleImage',
          type: 'singleImage',
        }),
        defineArrayMember({
          name: 'featuredCats',
          type: 'featuredCats',
        }),
        defineArrayMember({
          name: 'howItWorks',
          type: 'howItWorks',
        }),
        defineArrayMember({
          name: 'stats',
          type: 'stats',
        }),
        defineArrayMember({
          name: 'richText',
          type: 'richText',
        }),
        defineArrayMember({
          name: 'twoColumn',
          type: 'twoColumn',
        }),
        defineArrayMember({
          name: 'helloAsso',
          type: 'helloAsso',
        })
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
      image: 'image'
    },
    prepare({ title, subtitle, image }) {
      return {
        title: `${title || 'Untitled'}`,
        subtitle: `/${subtitle.current}`,
        media: image,
      }
    },
  },
})
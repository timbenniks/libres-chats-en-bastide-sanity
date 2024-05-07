import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'cat',
  title: 'Cat',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'birthDate',
      title: 'Birth Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'showOnWebsite',
      title: 'Show On Website',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'withFamily',
      title: 'With Kids/Family',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'adoptionDate',
      title: 'Adoption Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'chipped',
      title: 'Chipped',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'specialNeeds',
      title: 'Special Needs',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'certificateHealthy',
      title: 'Health Certificate Available',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'healthBook',
      title: 'Health Book Available',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'sterilised',
      title: 'Sterilised',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'withDogs',
      title: 'Gets Along with Dogs',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'withCats',
      title: 'Gets Along with Other Cats',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'character',
      title: 'Character',
      type: 'text',
    }),
    defineField({
      name: 'aboutMe',
      title: 'About the cat',
      type: 'blockContent',
      description: 'story on the site'
    }),
    defineField({
      name: 'reserved',
      title: 'Reserved',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'adopted',
      title: 'Adopted',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'deceased',
      title: 'Deceased',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'sex',
      title: 'Sex',
      type: 'string',
      options: {
        list: [
          { title: 'Female', value: 'female' },
          { title: 'Male', value: 'male' }
        ],
      }
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'arrivalDate',
      title: 'Arrival Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'history',
      title: 'History',
      type: 'text',
    }),
    defineField({
      name: 'protocolDate',
      title: 'Protocol Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'careReceived',
      title: 'Care Received',
      type: 'text',
    }),
    defineField({
      name: 'hostFamily',
      title: 'Host Family',
      type: 'reference',
      to: [{ type: 'family' }],
    }),
    defineField({
      name: 'adoptionFamily',
      title: 'Adoption Family',
      type: 'reference',
      to: [{ type: 'family' }],
    }),
    defineField({
      name: 'chipId',
      title: 'Chip ID',
      type: 'string',
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
    }),
    defineField({
      name: 'deedOfTransfer',
      title: 'Deed of Transfer',
      type: 'boolean',
      initialValue: false
    }),

    defineField({
      name: 'iconsOnCard',
      title: 'Icons on card',
      description: "These show on the cat card",
      type: 'array',
      of: [
        defineField({
          name: 'icon',
          type: 'string',
          options: {
            list: [
              { title: "Good with dogs", value: "withDogs" },
              { title: "Good with cats", value: "withCats" },
              { title: "Good with Family", value: "withFamily" },
              { title: "Special Needs", value: "specialNeeds" }
            ],
          },
        })
      ]
    }),

    defineField({
      name: 'weights',
      title: 'Weights',
      type: 'array',
      of: [
        defineType({
          name: 'weight',
          title: 'Weight',
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Weight (gr)', type: 'number' }),
            defineField({ name: 'date', title: 'Date Recorded', type: 'date', options: { dateFormat: 'YYYY-MM-DD' } })
          ]
        })
      ]
    }),
    defineField({
      name: 'tests',
      title: 'Tests',
      type: 'array',
      of: [
        defineType({
          name: 'test',
          title: 'Tests',
          type: 'object',
          fields: [
            defineField({ name: 'date', title: 'Date', type: 'date', options: { dateFormat: 'YYYY-MM-DD' } }),
            defineField({
              name: 'testType',
              title: 'Test Type',
              type: 'string',
              options: {
                list: [
                  { title: 'FIV Test', value: 'test_fiv' },
                  { title: 'FELV Test', value: 'test_felv' },
                  { title: 'Other', value: 'other' },
                ],
              },
              description: 'The type of treatment given.',
            }),
            defineField({
              name: 'outcome',
              title: 'Outcome',
              type: 'string',
              options: {
                list: [
                  { title: 'Positive', value: 'positive' },
                  { title: 'Negative', value: 'negative' },
                  { title: 'Other', value: 'other' },
                ],
              },
            }),
            defineField({
              name: 'notes',
              title: 'Notes',
              type: 'text',
              description: 'Additional details about the treatment (optional).',
            })
          ]
        })
      ]
    }),

    defineField({
      name: 'treatments',
      title: 'Treatments',
      type: 'array',
      of: [
        defineType({
          name: 'treatment',
          title: 'Treatment',
          type: 'object',
          fields: [
            defineField({ name: 'date', title: 'Date', type: 'date', options: { dateFormat: 'YYYY-MM-DD' } }),

            defineField({
              name: 'treatmentType',
              title: 'Treatment Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Vaccination - First Dose', value: 'vaccination_first' },
                  { title: 'Vaccination - Second Dose', value: 'vaccination_second' },
                  { title: 'Deworming', value: 'deworming' },
                  { title: 'Spay/Neuter Surgery', value: 'spay_neuter_surgery' },
                  { title: 'Microchipping', value: 'microchipping' },
                  { title: 'Flea, Tick Prevention', value: 'flea_tick_prevention' },
                  { title: 'Ear Mite Treatment', value: 'ear_mite_treatment' },
                  { title: 'Rabies Vaccination', value: 'rabies_vaccination' },
                  { title: 'Dental Cleaning', value: 'dental_cleaning' },
                  { title: 'Other', value: 'other' },
                ],
              },
              description: 'The type of treatment given.',
            }),
            defineField({
              name: 'notes',
              title: 'Notes',
              type: 'text',
              description: 'Additional details about the treatment (optional).',
            })
          ]
        })
      ]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        media: image,
      }
    },
  },
});
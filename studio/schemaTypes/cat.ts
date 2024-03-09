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
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'adoptionDate',
      title: 'Adoption Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'chipped',
      title: 'Chipped',
      type: 'boolean',
    }),
    defineField({
      name: 'certificateHealthy',
      title: 'Health Certificate Available',
      type: 'boolean',
    }),
    defineField({
      name: 'healthBook',
      title: 'Health Book Available',
      type: 'boolean',
    }),
    defineField({
      name: 'sterilised',
      title: 'Sterilised',
      type: 'boolean',
    }),
    defineField({
      name: 'withDogs',
      title: 'Gets Along with Dogs',
      type: 'boolean',
    }),
    defineField({
      name: 'withCats',
      title: 'Gets Along with Other Cats',
      type: 'boolean',
    }),
    defineField({
      name: 'character',
      title: 'Character',
      type: 'text',
    }),
    defineField({
      name: 'reserved',
      title: 'Reserved',
      type: 'boolean',
    }),
    defineField({
      name: 'adopted',
      title: 'Adopted',
      type: 'boolean',
    }),
    defineField({
      name: 'deceased',
      title: 'Deceased',
      type: 'boolean',
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
      subtitle: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'arrivalDate',
      title: 'Arrival Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
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
        dateFormat: 'DD-MM-YYYY',
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
            defineField({ name: 'date', title: 'Date Recorded', type: 'date', options: { dateFormat: 'DD-MM-YYYY' } })
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
            defineField({ name: 'date', title: 'Date', type: 'date', options: { dateFormat: 'DD-MM-YYYY' } }),

            defineField({
              name: 'treatmentType',
              title: 'Treatment Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Vaccination - First Dose', value: 'vaccination_first' },
                  { title: 'Vaccination - Second Dose', value: 'vaccination_second' },
                  { title: 'FIV Test', value: 'test_fiv' },
                  { title: 'FELV Test', value: 'test_felv' },
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
});
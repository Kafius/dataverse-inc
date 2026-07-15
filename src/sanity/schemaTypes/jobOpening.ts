import { defineType, defineField } from 'sanity';
import { CaseIcon } from '@sanity/icons/Case';

export const jobOpening = defineType({
  name: 'jobOpening',
  title: 'Job Opening',
  type: 'document',
  icon: CaseIcon,
  description: 'Unpublish a role to take it off the careers page.',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'department',
      type: 'string',
      options: {
        list: [
          'Back Office',
          'Healthcare',
          'Call Center',
          'Transcription',
          'Entertainment',
          'Admin',
          'Operations',
          'Client Relations',
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment type',
      type: 'string',
      description: 'e.g. "Full-Time" or "Contract / Full-Time".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      description: 'e.g. "Remote", "On-Site", "Hybrid".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first on the careers page.',
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'displayOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'department' },
  },
});

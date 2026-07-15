import { defineType, defineField } from 'sanity';
import { CalendarIcon } from '@sanity/icons/Calendar';

export const communityEvent = defineType({
  name: 'communityEvent',
  title: 'Community Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      type: 'string',
      description: 'The category pill shown above the title.',
      options: {
        list: [
          'Holiday Celebration',
          'Company Culture',
          'Charity Outreach',
          'Company Milestone',
          'Cultural Festival',
          'Team Building',
          'Social Events',
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      description: 'The main paragraph.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detail',
      type: 'text',
      rows: 3,
      description: 'The italic follow-up paragraph.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Displayed at 16:9.',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Describes the photo for screen readers. Falls back to the title if blank.',
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first. Recurring events (birthdays, outings) sit at the end.',
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
    select: { title: 'title', subtitle: 'tag', media: 'photo' },
  },
});

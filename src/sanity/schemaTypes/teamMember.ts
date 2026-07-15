import { defineType, defineField } from 'sanity';
import { UserIcon } from '@sanity/icons/User';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'Job title, e.g. "Chief Executive Officer" or "Dataverse Agent".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Square crop works best. Drag the hotspot to keep the face centred.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      type: 'text',
      rows: 3,
      description: 'Optional. Shown under the role on the About page when present.',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first on the About page.',
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
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
});

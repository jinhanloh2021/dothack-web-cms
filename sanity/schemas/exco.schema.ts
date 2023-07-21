import { getCurrentAY } from '@/lib/utils';
import { ImageRule, StringRule } from 'sanity';

const exco = {
  name: 'exco',
  title: 'EXCO',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',

      validation: (Rule: StringRule) => [
        Rule.required().error('Name of EXCO required'),
      ],
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: [
          'President',
          'Vice President (internal)',
          'Vice President (external)',
          'Honorary General Secretary',
          'General Executive',
          'Honorary Finance Secretary',
          'Finance Executive',
          'Marketing Director',
          'Marketing Executive',
          'Professional Development Director',
          'Professional Development Executive',
          'Tech Director',
          'Tech Executive',
          'Training Director',
          'Training Executive',
          'Public Relations Director',
          'Public Relations Executive',
          'Other',
        ],
      },
      validation: (Rule: StringRule) => [
        Rule.required().error('Title of EXCO is required'),
      ],
    },
    {
      name: 'term',
      title: 'Term',
      type: 'string',
      description: 'Term the EXCO served, eg. AY22/23',
      options: {
        list: [
          'AY19/20',
          'AY20/21',
          'AY21/22',
          'AY22/23',
          'AY23/24',
          'AY24/25',
          'AY25/26',
          'AY26/27',
        ],
      },
      initialValue: () => {
        return getCurrentAY();
      },
      validation: (Rule: StringRule) => [
        Rule.required().error('Term of EXCO is required'),
      ],
    },
    {
      name: 'profile_pic',
      title: 'Profile picture',
      type: 'image',

      options: { hotspot: true },
      storeOriginalFilename: false,
      validation: (Rule: ImageRule) => [
        Rule.required().warning('Image makes for a better user experience'),
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'profile_pic',
    },
  },
  orderings: [
    {
      title: 'Current EXCO',
      name: 'latestAY',
      by: [
        { field: 'term', direction: 'desc' },
        { field: 'position', direction: 'desc' },
      ],
    },
  ],
};

export default exco;

import { ImageRule, SlugRule, StringRule } from 'sanity';
const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: StringRule) => [
        Rule.required().error('Name of event required'),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Generate slug for use in the URL',
      options: { source: 'name' },
      validation: (Rule: SlugRule) => [
        Rule.required().error('Slug is required'),
      ],
    },
    {
      name: 'image',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      storeOriginalFilename: false,
      validation: (Rule: ImageRule) => [
        Rule.required().error('Event requires an image'),
      ],
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'alternative text',
          description:
            "Some of your visitors cannot see images, be they blind, color-blind, low-sighted; alternative text is of great help for those people that can rely on it to have a good idea of what's on your page.",
        },
      ],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'exco' }],
    },
    {
      name: 'date',
      title: 'Date posted',
      type: 'date',
      initialValue: new Date().toISOString().split('T')[0],
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          storeOriginalFilename: false,
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'alternative text',
              description:
                "Some of your visitors cannot see images, be they blind, color-blind, low-sighted; alternative text is of great help for those people that can rely on it to have a good idea of what's on your page.",
            },
          ],
        },
        {
          name: 'code',
          title: 'Code',
          type: 'code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'Javascript', value: 'javascript' },
              { title: 'JSX', value: 'jsx' },
              { title: 'Typescript', value: 'typescript' },
              { title: 'TSX', value: 'tsx' },
              { title: 'Python', value: 'python' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
            ],
            withFilename: true,
          },
        },
      ],
    },
  ],
};

export default event;

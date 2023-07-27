import { ImageRule, SlugRule, StringRule, TextRule } from 'sanity';
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
          rows: 1,
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
      description: 'Not to be confused with Event Date',
      initialValue: new Date().toISOString().split('T')[0],
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 2,
      description:
        'A 100 character summary of this event to be used as preview',
      validation: (Rule: TextRule) => [
        Rule.required().error('Event requires a short excerpt'),
        Rule.min(100).warning(
          'Using at least 100 characters will make the preview look better'
        ),
      ],
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
              { title: 'CSS', value: 'css' },
              { title: 'C#', value: 'csharp' },
              { title: 'C++', value: 'cpp' },
              { title: 'Go', value: 'golang' },
              { title: 'HTML', value: 'html' },
              { title: 'Java', value: 'java' },
              { title: 'Javascript', value: 'javascript' },
              { title: 'JSON', value: 'json' },
              { title: 'JSX', value: 'jsx' },
              { title: 'PHP', value: 'php' },
              { title: 'Plaintext', value: 'text' },
              { title: 'Python', value: 'python' },
              { title: 'Rust', value: 'rust' },
              { title: 'Ruby', value: 'ruby' },
              { title: 'SASS', value: 'sass' },
              { title: 'SCSS', value: 'scss' },
              { title: 'Shell', value: 'sh' },
              { title: 'SQL', value: 'sql' },
              { title: 'TSX', value: 'tsx' },
              { title: 'Typescript', value: 'typescript' },
            ],
            withFilename: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Latest written',
      name: 'datePostedLatest',
      by: [
        { field: 'date', direction: 'desc' },
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
};

export default event;

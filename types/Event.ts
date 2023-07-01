export interface EventQuery {
  name: string;
  date: string;
  slug: string;
  imgSrc: string;
  author: any;
  excerpt: string;
  content: any;
}

const eg = {
  image: {
    asset: {
      _type: 'reference',
      _ref: 'image-7938ea720e307939b8a13dbe1ae8e3482d357246-1080x1080-png',
    },
    _type: 'image',
    alt: 'Poster for HEAP 2023 event',
  },
  author: { _ref: '9f775717-f224-43eb-b3b3-de0ed2fb1e30', _type: 'reference' },
  _type: 'event',
  name: 'Heap 2023',
  date: '2023-06-29',
  _rev: 'OjX2oTcqgZSDekWO2oTpqS',
  _id: '398b4ed0-06c1-4c0f-a8ef-f9484a8aa755',
  _updatedAt: '2023-06-29T11:18:03Z',
  content: [
    {
      _key: '0957b445b092',
      markDefs: [],
      children: [
        {
          text: 'This event was held over the summer break where students get to join many workshops and learn about web development. They learn a lot and it was good. Here is some code that they wrote.',
          _key: 'a1ac4da46e4d',
          _type: 'span',
          marks: [],
        },
      ],
      _type: 'block',
      style: 'normal',
    },
    {
      code: 'const Header = ({text}) => {\n text.toUpper();\n return <H1>{text}</H1>\n}',
      filename: 'Header.jsx',
      _type: 'code',
      language: 'jsx',
      _key: '671582eb8b34',
    },
    {
      _key: 'e438edc0882e',
      markDefs: [],
      children: [
        {
          text: 'Overall they really enjoyed the event.',
          _key: 'b54968326a4b',
          _type: 'span',
          marks: [],
        },
      ],
      _type: 'block',
      style: 'normal',
    },
    {
      _type: 'block',
      style: 'normal',
      _key: '292f714ca875',
      markDefs: [],
      children: [{ _key: '34c68bb25f26', _type: 'span', marks: [], text: '' }],
    },
    {
      hotspot: {
        height: 0.13970588235294162,
        _type: 'sanity.imageHotspot',
        width: 0.44362745098039286,
        x: 0.47916666666666663,
        y: 0.4987745098039216,
      },
      _type: 'image',
      alt: 'Group photo of the participants for our React Basics workshop',
      _key: '93c79231fa85',
      asset: {
        _ref: 'image-a06696f18a269da7db5643c6b809dca403d41fa7-1080x1080-png',
        _type: 'reference',
      },
      crop: {
        bottom: 0.267156862745098,
        _type: 'sanity.imageCrop',
        right: 0.022058823529411686,
        top: 0.2598039215686273,
        left: 0.029411764705882304,
      },
    },
  ],
  slug: { current: 'heap-2023', _type: 'slug' },
  _createdAt: '2023-06-29T10:57:28Z',
};

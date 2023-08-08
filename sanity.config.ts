import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';
import { codeInput } from '@sanity/code-input';

const config = defineConfig({
  title: 'Dothack CMS',
  projectId: 'fdfze30c',
  dataset: 'production',
  apiVersion: '2023-06-28',
  basePath: '/admin',
  plugins: [
    deskTool(),
    codeInput({
      codeModes: [
        {
          name: 'rust',
          loader: () =>
            import('@codemirror/lang-rust').then(({ rust }) => rust()),
        },
        {
          name: 'cpp',
          loader: () => import('@codemirror/lang-cpp').then(({ cpp }) => cpp()),
        },
        {
          name: 'solidity',
          loader: () =>
            import('@replit/codemirror-lang-solidity').then(
              ({ solidity }) => solidity
            ),
        },
      ],
    }),
  ],
  schema: { types: schemaTypes },
});

export default config;

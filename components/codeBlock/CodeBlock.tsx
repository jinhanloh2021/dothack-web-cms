import Prism, { Token } from 'prismjs';
import CopyToClipboardBtn from '../copyToClipboardBtn';
import '@/styles/prism-one-themes.scss';
import { cn } from '@/lib/utils';

type Props = {
  language: string;
  children: string;
  filename?: string;
};

/**
 * Mapping from language to filenames
 * Some languages extend others. See the files prism-typescript extends javascript.
 * Have to manually resolve dependencies and import both.
 */
const languageMap: Record<string, string[]> = {
  csharp: ['csharp'],
  css: ['css'],
  cpp: ['c', 'clike', 'cpp'],
  golang: ['go'],
  html: ['markup'], //html is markup
  java: ['java'],
  javascript: ['javascript'],
  json: ['json'],
  jsx: ['jsx'],
  markdown: ['markdown'],
  php: ['php'],
  python: ['python'],
  ruby: ['ruby'],
  rust: ['rust'],
  sass: ['css', 'sass'],
  scss: ['css', 'scss'],
  sh: ['shell-session'],
  solidity: ['clike', 'solidity'],
  sql: ['sql'],
  text: ['text'],
  tsx: ['jsx', 'tsx'],
  typescript: ['javascript', 'typescript'],
  xml: ['xml-doc'],
  yaml: ['yaml'],
};

function importLanguages(filenames: string[]): Promise<any>[] {
  return filenames.map(
    (filename) => import(`prismjs/components/prism-${filename}`)
  );
}

/**
 * Only PrismJS syntax highlighting. Unrelated to sanity studio's code block highlighting
 * That is in sanity.config.ts and event.schema.ts
 */
const CodeBlock = async ({ language, children, filename }: Props) => {
  const filenames = languageMap[language];
  Promise.all(importLanguages(filenames));
  const data: Array<string | Token> = Prism.languages[language]
    ? Prism.tokenize(children, Prism.languages[language])
    : [];

  return (
    <pre className={`language-${language} text-sm relative`}>
      <div
        className={cn(
          `flex justify-between items-center`,
          'bg-gradient-to-r dark:from-[#5C6370] from-[#A0A1A7] dark:via-[#5C6370] via-[#A0A1A7] via-80% to-transparent to-[80%] bg-bottom bg-repeat-x bg-[length:10px_1px]',
          'pb-1 mb-1'
        )}
      >
        <p className='font-normal text-[#A0A1A7] dark:text-[#5C6370]'>
          {filename ?? valueToTitle[language]}
        </p>
        <CopyToClipboardBtn text={children} />
      </div>
      {data.length ? data.map(tokenToReactNode) : children}
    </pre>
  );
};

export default CodeBlock;

function tokenToReactNode(token: Token | string, i: number): React.ReactNode {
  if (typeof token === 'string') {
    return <span key={i}>{token}</span>;
  } else if (typeof token.content === 'string') {
    return (
      <span key={i} className={`token ${token.type}`}>
        {token.content}
      </span>
    );
  } else if (Array.isArray(token.content)) {
    return (
      <span key={i} className={`token ${token.type}`}>
        {token.content.map(tokenToReactNode)}
      </span>
    );
  } else {
    return (
      <span key={i} className={`token ${token.type}`}>
        {tokenToReactNode(token.content, 0)}
      </span>
    );
  }
}

const valueToTitle: { [key: string]: string } = {
  csharp: 'C#',
  css: 'CSS',
  cpp: 'C++',
  golang: 'Go',
  html: 'HTML',
  java: 'Java',
  javascript: 'Javascript',
  json: 'JSON',
  jsx: 'JSX',
  markdown: 'Markdown',
  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  rust: 'Rust',
  sass: 'SASS',
  scss: 'SCSS',
  sh: 'Shell',
  solidity: 'Solidity',
  sql: 'SQL',
  text: 'Plaintext',
  tsx: 'TSX',
  typescript: 'Typescript',
  xml: 'XML',
  yaml: 'YAML',
};

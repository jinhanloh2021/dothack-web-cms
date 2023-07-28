import Prism, { Token } from 'prismjs';
import CopyToClipboardBtn from '../copyToClipboardBtn';
import '@/styles/prism-one-themes.scss';
import { cn } from '@/lib/utils';

type Props = {
  language: string;
  children: string;
  filename?: string;
};
const languageMap: Record<string, string[]> = {
  javascript: ['javascript'],
  typescript: ['javascript', 'typescript'],
  jsx: ['jsx'],
  tsx: ['jsx', 'tsx'],
  css: ['css'],
  python: ['python'],
  html: ['markup'], //html is markup
  java: ['java'],
  json: ['json'],
  php: ['php'],
  sql: ['sql'],
  csharp: ['csharp'],
  scss: ['css', 'scss'],
  sass: ['css', 'sass'],
  ruby: ['ruby'],
  text: ['text'],
  sh: ['shell-session'],
  golang: ['go'],
  rust: ['rust'],
  cpp: ['c', 'clike', 'cpp'], // manually resolve dependencies // EXTREMELY BAD
};

const CodeBlock = async ({ language, children, filename }: Props) => {
  const languages = languageMap[language];
  Promise.all(importLanguages(languages));
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

function importLanguages(languages: string[]): Promise<any>[] {
  return languages.map((l) => import(`prismjs/components/prism-${l}`));
}

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
  css: 'CSS',
  csharp: 'C#',
  cpp: 'C++',
  golang: 'Go',
  html: 'HTML',
  java: 'Java',
  javascript: 'Javascript',
  json: 'JSON',
  jsx: 'JSX',
  php: 'PHP',
  text: 'Plaintext',
  python: 'Python',
  rust: 'Rust',
  ruby: 'Ruby',
  sass: 'SASS',
  scss: 'SCSS',
  sh: 'Shell',
  sql: 'SQL',
  tsx: 'TSX',
  typescript: 'Typescript',
};

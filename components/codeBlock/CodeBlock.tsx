import Prism, { Token } from 'prismjs';
import './prism-one-themes.scss';

type Props = {
  language: string;
  children: string;
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

const CodeBlock = async ({ language, children }: Props) => {
  const languages = languageMap[language];
  Promise.all(importLanguages(languages));
  const data: Array<string | Token> = Prism.languages[language]
    ? Prism.tokenize(children, Prism.languages[language])
    : [];

  return (
    <pre className={`language-${language} text-sm`}>
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

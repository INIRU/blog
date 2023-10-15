import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

import style from '@/css/Markdown.module.css';

import Image from 'next/image';
import hljs from 'highlight.js/lib/core';
import { firaCode } from '@/modules/font';

import { MDXRemote } from 'next-mdx-remote/rsc';

import CopyButton from './CopyButton';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);

const components = {
  h1: (props: any) => (
    <h1 {...props} className={style.h1_Md}>
      {props.children}
    </h1>
  ),
  p: (props: any) => (
    <p {...props} className={style.p_Md}>
      {props.children}
    </p>
  ),
  blockquote: (props: any) => (
    <blockquote {...props} className={style.blockquote_Md}>
      {props.children}
    </blockquote>
  ),
  code: (props: any) => (
    <code {...props} className={style.code_Md}>
      {props.children}
    </code>
  ),
  pre: (props: any) => {
    if (props.children.props.className) {
      let childSplit: string[];

      if (props.children.props.children) {
        childSplit = props.children.props.children
          .replace(/\n$/, '')
          .split('\n');
      } else {
        return props.children;
      }

      const fileSplit: string[] = props.children.props.className.split('|');
      const codeLanguage = fileSplit[0].replace(/language-/, '');
      const codeInfo = (): {
        lang: string;
        filter?: string;
        image?: 'plain' | 'original';
      } => {
        if (/^ts/.test(codeLanguage)) {
          return {
            lang: /x$/.test(codeLanguage) ? 'react' : 'typescript',
            filter: /x$/.test(codeLanguage)
              ? 'invert(49%) sepia(15%) saturate(7175%) hue-rotate(162deg) brightness(95%) contrast(101%)'
              : 'none',
            image: /x$/.test(codeLanguage) ? 'original' : 'plain',
          };
        } else if (/^js/.test(codeLanguage)) {
          return {
            lang: /x$/.test(codeLanguage) ? 'react' : 'javascript',
            image: /x$/.test(codeLanguage) ? 'original' : 'plain',
          };
        }
        return { lang: codeLanguage };
      };

      return (
        <>
          {fileSplit.length > 1 ? (
            <div className={style.codeHeader}>
              <Image
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${
                  codeInfo().lang
                }/${codeInfo().lang}-${codeInfo().image ?? 'original'}.svg`}
                width={20}
                height={20}
                style={{
                  filter: codeInfo().filter ?? '',
                  borderRadius: '2.5px',
                }}
                alt={''}
              ></Image>
              <div>
                <p>{fileSplit[1]}</p>
              </div>
              <div className="w-100"></div>
              <CopyButton code={props.children.props.children} />
            </div>
          ) : null}

          <pre
            {...props}
            className={`${style.pre_Md} ${
              fileSplit.length > 1 ? style.pre_Head : ''
            } ${firaCode.className}`}
          >
            <code className={`${style.code_Md} ${style.code_Flex} ${firaCode}`}>
              {childSplit.map((code, i) => {
                let codeHg: string;
                try {
                  codeHg = hljs.highlight(code, {
                    language: codeLanguage,
                  }).value;
                } catch {
                  codeHg = code;
                }

                return (
                  <span
                    key={i}
                    className={`markdown-hg ${style.code_Line}`}
                    dangerouslySetInnerHTML={{
                      __html: codeHg,
                    }}
                  ></span>
                );
              })}
            </code>
          </pre>
        </>
      );
    } else {
      return (
        <pre {...props} className={`${style.pre_Md} ${firaCode.className}`}>
          <CopyButton code={props.children.props.children} />
          {props.children}
        </pre>
      );
    }
  },
  ul: (props: any) => (
    <ul {...props} className={style.ul_Md}>
      {props.children}
    </ul>
  ),
  li: (props: any) => (
    <li {...props} className={style.li_Md}>
      {props.children}
    </li>
  ),
};

export { components };

export default function Markdown(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={{ ...components }} />;
}

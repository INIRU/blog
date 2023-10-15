'use client';

import { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { components } from './Markdown';

function MDXContent({ children }: { children: string }) {
  const [content, setContent] = useState<any>(null);
  useEffect(() => {
    (async () => {
      if (children) setContent(await serialize(children));
    })();
  }, [children]);

  if (content) {
    return <MDXRemote {...content} components={components} />;
  }
}

export default function Preview({ content }: { content: string }) {
  return <MDXContent>{content}</MDXContent>;
}

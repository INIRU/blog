'use client';

import dynamic from 'next/dynamic';

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import { useEffect } from 'react';

const Markdown = dynamic(() =>
  import('@uiw/react-md-editor').then((mod) => {
    return mod.default.Markdown;
  })
);

export default function BlogContent({
  content,
  _id,
}: {
  content: string;
  _id: string;
}) {
  useEffect(() => {
    if (!(_id in document.cookie.split('; '))) {
      document.cookie = `${_id}=true; max-age=3600`;
    }
  }, []);

  return <Markdown source={content} />;
}

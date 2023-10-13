'use client';

import dynamic from 'next/dynamic';

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import { useEffect } from 'react';
import Skeleton from '../Skeleton/Skeleton';

const Markdown = dynamic(
  () =>
    import('@uiw/react-md-editor').then((mod) => {
      return mod.default.Markdown;
    }),
  {
    loading: () => <Skeleton ch={[32, 0, 23, 67, 55, 60, 42, 35, 42, 0, 15]} />,
  }
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

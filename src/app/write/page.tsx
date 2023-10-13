'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import style from '@/css/Write.module.css';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
);
const EditerMarkdown = dynamic(
  () =>
    import('@uiw/react-md-editor').then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);

export default function Write() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [title, setTitle] = useState<string | undefined>('');
  const [value, setValue] = useState<string | undefined>('');
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (
      session?.user?.email != 'iniru@kakao.com' &&
      status != 'authenticated' &&
      status != 'loading'
    ) {
      router.replace('/');
    }
  }, []);

  return (
    <div className={`container`}>
      <h1 className={`mt-2`}>Write</h1>
      <div className={`${style.container} mt-1`}>
        <div className={`${style.writeForm}`}>
          <div className={style.fromInput}>
            <input
              type="text"
              name="title"
              className={style.input}
              required={true}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label className={style.label}>Title</label>
          </div>
          <div className="mt-2">
            <label className={style.label}>Content</label>
            {preview ? (
              <EditerMarkdown source={value} className="mt-1" />
            ) : (
              <MDEditor
                className="mt-1"
                height={500}
                value={value}
                onChange={setValue}
              />
            )}
          </div>
          <div className={`mt-2 ${style.writeBtnList}`}>
            <button
              className={`btn ${style.completeBtn}`}
              onClick={() => {
                fetch('/api/write', {
                  method: 'POST',
                  body: JSON.stringify({
                    title: title,
                    content: value,
                    date: new Date(),
                  }),
                })
                  .then((r) => {
                    if (r.status == 200) {
                      return r.json();
                    } else {
                      alert(r.status + ' | ' + r.statusText);
                    }
                  })
                  .then(() => {
                    router.push('/');
                  });
              }}
            >
              완료
            </button>
            <button
              className={`btn ${style.previewBtn}`}
              onClick={() => {
                setPreview(!preview);
              }}
            >
              {preview ? '에디터' : '미리보기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

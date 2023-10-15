'use client';

import style from '@/css/Write.module.css';

import { useRouter } from 'next/navigation';

import { KeyboardEvent, TextareaHTMLAttributes, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import Preview from '../Markdown/Preview';

export default function Form() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState<string>('');

  const [preview, setPreview] = useState(false);

  return (
    <div className={style.container}>
      {preview ? <Overlay /> : null}
      <div className={`${style.form} ps-4`}>
        <textarea
          className={`${style.titleInput} mt-4`}
          placeholder="제목을 작성하세요"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <hr className={`${style.titleBar} mt-4 mb-5`} />
        <textarea
          className={style.contentInput}
          placeholder="내용을 작성하세요."
          onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key == 'Tab') {
              e.preventDefault();
              const start: number = e.currentTarget.selectionStart;
              const end: number = e.currentTarget.selectionEnd;

              let value: string = e.currentTarget.value;

              e.currentTarget.value =
                value.substring(0, start) + '\t' + value.substring(end);

              e.currentTarget.selectionStart = e.currentTarget.selectionEnd =
                start + 1;

              setContent(e.currentTarget.value);
              return false;
            }
          }}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <div className={style.footer}>
          <div className={style.footerMenu}>
            <div
              className={`${style.btn} ${style.exitBtn}`}
              onClick={() => {
                router.back();
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <p>나가기</p>
            </div>
            <div className="w-100"></div>
            <div className={style.writeSuccess}>
              <button
                className={`${style.btn} ${style.previewBtn} ${
                  preview ? style.closeBtn : ''
                }`}
                onClick={() => {
                  setPreview(!preview);
                }}
              >
                {preview ? '닫기' : '미리보기'}
              </button>
              <button
                className={`${style.btn} ${style.successBtn}`}
                onClick={() => {
                  fetch('/api/write', {
                    method: 'POST',
                    body: JSON.stringify({
                      title: title,
                      content: content,
                      date: new Date(),
                      views: 0,
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
                      router.refresh();
                    });
                }}
              >
                작성 완료
              </button>
            </div>
          </div>
        </div>
      </div>
      {preview ? (
        <div className={`markdown ${style.preview}`}>
          <Preview content={content} />
        </div>
      ) : null}
    </div>
  );
}

function Overlay() {
  return (
    <div className={style.overlay}>
      <h1>미리보기를 종료해주세요.</h1>
    </div>
  );
}

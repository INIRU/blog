'use client';

import style from '@/css/Write.module.css';

import { useRouter } from 'next/navigation';

import { KeyboardEvent, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import Preview from '../Markdown/Preview';

export default function Form({
  id,
  _title,
  _content,
}: {
  id?: string;
  _title?: string;
  _content?: string;
}) {
  const router = useRouter();

  const [title, setTitle] = useState(_title ?? '');
  const [content, setContent] = useState<string>(_content ?? '');

  const [preview, setPreview] = useState(false);

  return (
    <div className={style.container}>
      <form
        action={id ? '/api/edit' : '/api/write'}
        method="POST"
        id="form"
        className={`${style.form} ps-4`}
      >
        {id ? (
          <div className={style.hideData}>
            <input name="id" value={id} readOnly />
          </div>
        ) : null}
        <div
          className={`w-100 ${style.inputArea} ${
            preview ? style.previewWidth : ''
          }`}
        >
          <textarea
            name="title"
            className={`${style.titleInput} mt-4`}
            placeholder="제목을 작성하세요"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
          <hr className={`${style.titleBar} mt-4 mb-5`} />
          <textarea
            name="content"
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
            value={content}
            required
          ></textarea>
        </div>
        {preview ? (
          <div
            className={`markdown ${style.preview} ${
              preview ? style.previewWidth : ''
            }`}
          >
            <Preview content={content} />
          </div>
        ) : null}
      </form>
      <div className={style.footer}>
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
            type="submit"
            form="form"
            className={`${style.btn} ${style.successBtn}`}
          >
            작성 완료
          </button>
        </div>
      </div>
    </div>
  );
}

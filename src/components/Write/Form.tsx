'use client';

import style from '@/css/Write.module.css';

import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

export default function Form() {
  const router = useRouter();

  return (
    <div className={`${style.form} ps-4`}>
      <textarea
        className={`${style.titleInput} mt-4`}
        placeholder="제목을 작성하세요"
      />
      <hr className={`${style.titleBar} mt-4 mb-5`} />
      <textarea
        className={style.contentInput}
        placeholder="내용을 작성하세요."
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
            <button className={`${style.btn} ${style.previewBtn}`}>
              미리보기
            </button>
            <button className={`${style.btn} ${style.successBtn}`}>
              작성 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

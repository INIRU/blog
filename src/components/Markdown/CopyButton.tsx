'use client';

import style from '@/css/Markdown.module.css';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function CopyButton({ code }: { code: string }) {
  const [btn, setBtn] = useState(false);
  const [timeoutInstance, setTimeoutInstance] =
    useState<NodeJS.Timeout | null>();

  return (
    <>
      <button
        className={style.pre_Copy}
        aria-label="copy"
        onClick={async () => {
          if (timeoutInstance) {
            clearTimeout(timeoutInstance);
            setTimeoutInstance(null);
          }
          setBtn(true);
          await navigator.clipboard.writeText(code);
        }}
        onMouseOut={() => {
          if (btn) {
            const hideTimer = setTimeout(() => {
              setBtn(false);
            }, 500);
            setTimeoutInstance(hideTimer);
          }
        }}
      >
        <FontAwesomeIcon icon={faCopy} className={btn ? '' : style.active} />
        <FontAwesomeIcon icon={faCheck} className={btn ? style.active : ''} />
      </button>
    </>
  );
}

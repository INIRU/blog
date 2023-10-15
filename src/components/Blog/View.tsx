'use client';

import { useEffect } from 'react';

export default function View({ id }: { id: string }) {
  useEffect(() => {
    if (!(id in document.cookie.split('; '))) {
      document.cookie = `${id}=viewed; max-age=3600`;
    }
  });

  return <></>;
}

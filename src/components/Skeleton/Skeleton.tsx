import style from '@/css/Skeleton.module.css';

export default function Skeleton(props: {
  ch: number[];
  height?: number;
  image?: boolean;
  _className?: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25em' }}>
      {props.ch.map((len, i) => {
        return (
          <div
            key={i}
            style={{
              width: `${len}em`,
              height: props.height ? `${props.height * 1.2}em` : '1.2em',
            }}
            className={`${style.loding} ${props._className ?? ''} ${
              props.image ? style.image : ''
            }`}
          ></div>
        );
      })}
    </div>
  );
}

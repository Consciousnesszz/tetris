import React from 'react';

import style from './index.less';

export default function NoticeInfo(props) {
  const { handleClick } = props;

  return (
    <ul className={style.controlBox}>
      {
        ['上', '下', '左', '右', '旋转'].map(item => (
          <li key={item}><input type="button" value={item} onClick={handleClick} /></li>
        ))
      }
    </ul>
  );
}
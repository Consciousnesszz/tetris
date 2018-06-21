import React from 'react';

import { classConf } from '../../static/conf';
import style from './index.less';

export default function NewBlock(props) {
  const { nextBlock, info } = props;

  return (
    <div className={style.box}>
      {
        nextBlock.map(row => (
          <ul key={Math.random()} className={style.next}>
            {
              row.map(item => (
                <li key={Math.random()} className={classConf[item]} />
              ))
            }
          </ul>
        ))
      }
      {
        <ul>
          {
            info.map(item => (
              <li key={item.title}>{`${item.title}: ${item.value}`}</li>
            ))
          }
        </ul>
      }
    </div>
  );
}

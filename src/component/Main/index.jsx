import React from 'react';

import { classConf } from '../../static/conf';
import style from './index.less';

export default function Main(props) {
  const { matrix } = props;

  return (
    <div className={style.mainbox}>
      {
        matrix.map(row => (
          <ul key={Math.random()}>
            {
              row.map(item => (
                <li key={Math.random()} className={classConf[item]} />
              ))
            }
          </ul>
        ))
      }
    </div>
  );
}

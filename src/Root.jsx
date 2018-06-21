import React, { Component } from 'react';

import { mkMatrix } from './util/util';
import { up, down, left, right, rotate } from './model/control';
import newBlock from './model/blockFactory';

import Main from './component/Main';
import InfoPanle from './component/InfoPanle';
import Control from './component/Control';

import style from './index.less';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePanel: mkMatrix(0, { row: 20, col: 10 }),
      currentBlock: newBlock(),
      nextBlock: newBlock(),
      info: [{
        title: '用户',
        value: 'user1',
      }, {
        title: '难度',
        value: 1,
      }, {
        title: '得分',
        value: 0,
      }, {
        title: '用时',
        value: '00:00',
      }],
    };

    this.handleBlockMove = this.handleBlockMove.bind(this);
  }

  handleBlockMove(e) {
    const { gamePanel, currentBlock } = this.state;

    switch (e.target.value) {
      case '上':
        up(gamePanel, currentBlock);
        break;
      case '下':
        down(gamePanel, currentBlock);
        break;
      case '左':
        left(gamePanel, currentBlock);
        break;
      case '右':
        right(gamePanel, currentBlock);
        break;
      case '旋转':
        rotate(gamePanel, currentBlock);
        break;
      default:
        rotate(gamePanel, currentBlock);
        break;
    }
  }

  render() {
    const {
      gamePanel,
      currentBlock,
      nextBlock,
      info,
    } = this.state;

    return (
      <div className={style.container}>
        <div className={style.mainBox}>
          <Main matrix={gamePanel} movingBlock={currentBlock} />
        </div>
        <div className={style.control}>
          <InfoPanle nextBlock={nextBlock} info={info} />
          <Control handleClick={this.handleBlockMove} />
        </div>
      </div>
    );
  }
}

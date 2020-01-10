import React, {Component, Ref} from "react";

import {DraftailEditor, BLOCK_TYPE, INLINE_STYLE, ENTITY_TYPE} from 'draftail';

import style from './Editor.module.scss';
import Button from 'react-bootstrap/Button';
import { IoMdMore } from 'react-icons/io';

const initial = JSON.parse(sessionStorage.getItem('content') || 'null');

class Editor extends Component<any, any> {

  editorRef = React.createRef<Component<any, any>>();

  onSave = (content: string) => {
    console.log(`saving: ${JSON.stringify(content)}`);
    sessionStorage.setItem('content', JSON.stringify(content));
  };

  focusToEditor = () => {
    const current: any = this.editorRef.current;
    console.log(current.focus());
  };

  render() {
    return <div className={style.editor}>
      <header className={style.header}>
        <ul className={style.breadCrumb}>
          <li>ファイトクラブ</li>
          <li>メンバー向け</li>
        </ul>
        <div className={style.headerMenu}>
          <ul className={style.viewingUsers}>
            <li><img src="https://placekitten.com/40/40" alt="Adrian Tang" className={style.thumbnail}/></li>
            <li><img src="https://placekitten.com/40/40" alt="Adrian Tang" className={style.thumbnail}/></li>
            <li><img src="https://placekitten.com/40/40" alt="Adrian Tang" className={style.thumbnail}/></li>
          </ul>
          <Button className={style.shareBtn} variant="success">Share</Button>
          <Button className={style.moreBtn} variant="link"><IoMdMore/></Button>
        </div>
      </header>
      <div className={style.article}>
        <input className={style.titleInput} type="text" placeholder="Untitled"/>
        <DraftailEditor
          ref={this.editorRef}
          rawContentState={initial || null}
          onSave={this.onSave}
          topToolbar={false}
          blockTypes={[
            { type: BLOCK_TYPE.HEADER_ONE },
            { type: BLOCK_TYPE.HEADER_TWO },
            { type: BLOCK_TYPE.HEADER_THREE },
            { type: BLOCK_TYPE.HEADER_FOUR },
            { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
            { type: BLOCK_TYPE.CODE }
          ]}
          inlineStyles={[
            { type: INLINE_STYLE.BOLD },
            { type: INLINE_STYLE.ITALIC },
            { type: INLINE_STYLE.CODE}
          ]}
        />
      </div>
    </div>;
  }
}

export default Editor;

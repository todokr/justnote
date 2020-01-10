import React, {Component} from 'react';
import MainMenu from 'components/mainmenu/MainMenu';
import Editor from 'components/editor/Editor';

import style from './EditPage.module.scss';

class EditPage extends Component {
  render() {
    return <div className={style.wrapper}>
      <div className={style.mainMenu}><MainMenu/></div>
      <div className={style.editor}><Editor/></div>
    </div>;
  }
}

export default EditPage;

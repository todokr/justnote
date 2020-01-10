import React, { Component } from 'react';

import { IoIosAddCircle, IoIosDocument, IoIosArchive, IoIosSettings } from 'react-icons/io';

import FileNodes from 'components/filenodes/FileNodes';

import style from './MainMenu.module.scss';

class MainMenu extends Component {

  render() {
    return <div className={style.mainMenu}>
      <nav className={style.primaryMenu}>
        <div className={style.user}>
          <a href="#">
            <img src="https://placekitten.com/40/40" alt="Adrian Tang" className={style.thumbnail}/>
            <p className={style.userName}>todokr</p>
          </a>
        </div>
        <div className={style.searchNotes}>
          <input type="search" placeholder="Search Notes" className="form-input"/>
        </div>
        <div className={style.newNote}>
          <a href="#">
            <IoIosAddCircle className={style.addIcon}/>
            <span>New Note</span>
          </a>
        </div>
        <div className={style.allNotes}>
          <a href="#" >
            <IoIosDocument className={style.documentIcon}/>
            <span>All Notes</span>
          </a>
        </div>
      </nav>
      <div className={style.fileNodes}>
        <FileNodes/>
      </div>
      <nav className={style.secondaryMenu}>
        <div className={style.archive}>
          <a href="#" >
            <IoIosArchive className={style.archiveIcon}/>
            <span>Archive</span>
          </a>
        </div>
        <div className={style.setting}>
          <a href="#" >
            <IoIosSettings className={style.settingIcon}/>
            <span>Setting</span>
          </a>
        </div>
      </nav>
    </div>
  }
}

export default MainMenu;

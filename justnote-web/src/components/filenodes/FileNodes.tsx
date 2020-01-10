import React, { Component } from 'react';

import { IoIosArrowForward, IoIosAdd } from 'react-icons/io';

import style from './FileNodes.module.scss'

interface FileNode {
  id: string
  title: string
  children: FileNode[]
}

const fileNodes: FileNode[] = [
  {id: '8', title: 'Aチーム', children: [
    {id: '8-1', title: '作戦履歴', children: [
      {id: '8-1-2', title: '2019-3 アフガニスタン', children: []},
      {id: '8-1-3', title: '2019-4 トルクメニスタン', children: []},]}]},
  {id: '9', title: 'オーシャンズ', children: [
    {id: '9-1', title: '今までに盗んだもの', children: []}]},
  {id: '10', title: 'ファイトクラブ', children: [
    {id: '10-1', title: 'メンバー向け', children: [
      {id: '10-1-1', title: 'ファイトクラブ規則', children: []}]}]}
];

interface DirectoryProps {
  id: string,
  title: string,
  children: FileNode[]
}

interface CollapseState {
  showChild: boolean
}

class Directory extends Component<DirectoryProps, CollapseState> {

  constructor(props: any) {
    super(props);
    this.state = {
      showChild: false
    }
  }
  clickOpen = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ showChild: !this.state.showChild } );
    console.log(`click open: ${this.props.title}`);
  };

  clickAdd = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`click add: ${this.props.title}`);
  };

  clickDoc = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`click doc: ${this.props.title}`);
  };

  render() {
    return <li className={style.directory} key={this.props.id}>
      <a
        href="/"
        onClick={this.clickDoc}
        className={`${style.directoryItem} ${this.state.showChild ? style.directoryOpen : ''}`}
      >
        <span className={style.directoryTitle}>{this.props.title}</span>
        <span className={style.actions}>
          <span
            className={style.addBtn}
            onClick={this.clickAdd}
          >
            <IoIosAdd className={style.addIcon}/>
          </span>
          <span className={style.openBtn} onClick={this.clickOpen}><IoIosArrowForward className={style.arrowIcon}/></span>
        </span>

      </a>
      {
        this.state.showChild ?
        <ul> { this.props.children.map(FileNodes.buildNode) } </ul>:
        null
      }
    </li>
  }
}

class FileNodes extends Component {

  static clickAdd = (fileNode: FileNode) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`click add: ${fileNode.title}`);
  };

  static buildNode(fileNode: FileNode) {
    if(fileNode.children.length > 0) {
      return <Directory key={fileNode.id} id={fileNode.id} title={fileNode.title} children={fileNode.children} />
    } else {
      return <li className="file" key={fileNode.id}>
        <a href="/" className={style.fileItem}>
          <span className={style.fileTitle}>{fileNode.title}</span>
          <span
            className={style.addBtn}
            onClick={FileNodes.clickAdd(fileNode)}
          >
            <IoIosAdd className={style.addIcon}/>
          </span>
        </a>
      </li>
    }
  }

  render() {
    return <div className={style.fileNodes}>
      <ul className={style.topLevelList}>
        { fileNodes.map(FileNodes.buildNode) }
      </ul>
    </div>;
  }
}

export default FileNodes;

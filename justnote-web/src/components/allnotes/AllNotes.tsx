import React, { Component } from "react";

class AllNotes extends Component<any, any> {

  render() {
    return <div className="all-notes">
      <h3>All Notes</h3>
      <header className="list-header">
        <small className="note-count">97 notes</small>
      </header>
      <ul>
        <li>
          <a href="#">
            <header className="note-header">
              <h4>Macaron Recipe</h4>
              <small>1 min ago</small>
            </header>
            <div className="note-body">
              <p>オーブンを300度に温めてそのまま気合で2時間こんがりと焼きます。そのあとでクリームをたっぷりと丁寧...</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <header className="note-header">
              <h4>骨付き肉 Recipe</h4>
              <small>7/18</small>
            </header>
            <div className="note-body">
              <p>オーブンを300度に温めてそのままの気合で2時間こんがりと焼きます。そのあとでソースをたっぷりと丁寧...</p>
            </div>
          </a>
        </li>
      </ul>
    </div>;
  }
}

export default AllNotes;

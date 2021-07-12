import React from "react";

export class ListItem extends React.Component {
  setFinished = () => {
    this.props.setFinished(this.props.idx);
  };

  delete = () => {
    this.props.deleteItem(this.props.idx);
  };

  render() {
    let todoContent = this.props.todo.isFinished ? (
      <s>{this.props.todo.todo}</s>
    ) : (
      this.props.todo.todo
    );
    let todoColor = this.props.todo.isFinished ? "red" : "black";
    return (
      (!this.props.finishedOnly || this.props.todo.isFinished) && (
        <li>
          <span style={{ color: todoColor }}>
            {todoContent}
          </span>
          <button class="rightbut" onClick={this.delete}>
            删除
          </button>
          <button class="leftbut" onClick={this.setFinished}>
            完成
          </button>
        </li>
      )
    );
  }
}

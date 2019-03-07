import React, { Component } from 'react'

export default class book extends Component {
  render() {
      const {img,title,author} = this.props.info;
    return (
      <div className="book">
        <h3>Hello From Book</h3>
        <h3>title : {title}</h3>
        <h3>author : {author}</h3>
        <img src={img} width="300px" alt="book"></img>
      </div>
    )
  }
}

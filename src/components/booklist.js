import React, { Component } from 'react'
import Book from './book';
import booksData from './data'

 class booklist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            book: booksData
        }
    }
 
  render() {
    
    return (
      <div>
        <h2>Best Selling Books this week</h2>
        {this.state.book.map(booki => (<Book key={booki.id} info={booki}></Book>))}
        {/* {this.state.book.map((item) => (<Book key={item.id} info={item}></Book>))} */}
      </div>
    )
  }
}
export default booklist;
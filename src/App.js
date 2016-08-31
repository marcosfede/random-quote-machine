import React, { Component } from 'react'
import './App.css'
import $ from 'jquery'

class App extends Component {
  constructor () {
    super()
    this.state = {
      quote: 'Push the button to generate a new quote'
    }
  }

  newQuote = () => {
    let quoteList = [ 'quote1', 'quote2', 'quote3' ]
    this.setState({ quote: quoteList[ Math.floor(Math.random() * quoteList.length) ] })
  }
  newQuoteJson = () => {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", (a) => {
      this.setState({ quote: a[0].content })
    });
  }

  render () {
    return (
      <div className='App'>
        <div id='quote'>{this.state.quote}</div>
        <div id='buttons'>
          <button id='newQuote' onClick={this.newQuote}>new</button>
          <button id='shareQuote' onClick={this.newQuoteJson}>share</button>
        </div>
      </div>
    )
  }
}

export default App

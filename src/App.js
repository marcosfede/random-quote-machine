import React, { Component } from 'react'
import './App.css'
import $ from 'jquery'
import { fullWhite } from 'material-ui/styles/colors'
import Appbar from './components/Appbar'
import Button from './components/Button'
import Quote from './components/Quoteblock'
import MadeWith from './components/Technologies'
import { Card, CardActions, CardTitle } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'
import RefreshButton from 'material-ui/svg-icons/navigation/refresh'



class App extends Component {

  constructor () {
    super()
    this.state = {
      quote: 'Push the button to generate a new quote',
      backgroundColor: this.newBackgroundColor(),
      loading: false
    }
    $.ajaxSetup({ cache: false });
  }

  newBackgroundColor () {
    let keys = Object.keys(colors)
    return colors[keys[ keys.length * Math.random() << 0 ]]
  }
  newQuoteJson = () => {
    this.setState({loading: true})
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand", (a) => {
      this.setState({
        quote: $("<textarea/>").html('"' + a[ 0 ].content.slice(3, -5) +'"').text(),
        author: a[ 0 ].title,
        backgroundColor: this.newBackgroundColor(),
        loading: false
      })
    });
  }

  render () {
    return (
      <div className='App' style={ { backgroundColor: this.state.backgroundColor } }>
        <Appbar currentcolor={this.state.backgroundColor}/>
        <Card id="card" zDepth={4}>
          <CardTitle title="Random Quote Generator" subtitle="made by marcosfede"/>
          <Quote
            id="CardText"
            quote={this.state.quote}
            loading={this.state.loading}
            backgroundColor={this.state.backgroundColor}
          />
          <CardActions id="actions">
            <Button icon={<RefreshButton color={fullWhite}/>} className="buttons" onClick={this.newQuoteJson}/>
            <Button backgroundColor={colors.lightBlue500} icon={<FontIcon className="fa fa-twitter" color={fullWhite}/>} className="buttons" onClick={this.newQuoteJson}/>
            <div id="author"><span id="author-text">{this.state.author}</span></div>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default App

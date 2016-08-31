import React, { Component } from 'react'
import './App.css'
import $ from 'jquery'
import RaisedButton from 'material-ui/RaisedButton'
import { fullWhite } from 'material-ui/styles/colors'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import Appbar from './components/Appbar'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'

const style = {
  margin: 12,
};

const Button = (props) => (
  <RaisedButton onClick={props.onClick}
                backgroundColor="#a4c639"
                icon={<ActionAndroid color={fullWhite}/>}
                style={style}
  />
)

class App extends Component {

  constructor () {
    super()
    this.state = {
      quote: 'Push the button to generate a new quote'
    }
    $.ajaxSetup({ cache: false });
  }

  newQuoteJson = () => {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand", (a) => {
      console.log(a[ 0 ])
      this.setState({ quote: $("<textarea/>").html(a[ 0 ].content.slice(3, -5)).text(), author: a[ 0 ].title })
      //this.setState({ quote: a[ 0 ].content.slice(3, -5), author: a[ 0 ].title })
    });
  }

  render () {
    return (
      <div className='App'>
        <Appbar/>
        <Card id="card" zDepth={4}>
          <CardTitle title="Card title" subtitle="Card subtitle"/>
          <CardText>
            {this.state.quote}
          </CardText>
          <CardActions>
            <Button onClick={this.newQuoteJson}/>
            <Button onClick={this.newQuoteJson}/>
          </CardActions>
        </Card>
        <div id="author">{this.state.author}</div>
      </div>
    )
  }
}

export default App

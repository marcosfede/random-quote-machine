import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import {CardText} from 'material-ui/Card'



let style = {
  display: 'block',
  'marginLeft': 'auto',
  'marginRight': 'auto'
}

const Quote = (props) => {
  let notloading =
    <CardText id='CardText'>
      {props.quote}
    </CardText>
  let loading =
    <div id='circleloading' >
      <CircularProgress
        style={style}
        color={props.backgroundColor}
      />
    </div>
  return  props.loading ? loading : notloading
}

export default Quote
import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { blueGrey800} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon';
import 'font-awesome/css/font-awesome.css'


const styles = {
  title: {
    cursor: 'pointer',
  },
  bar: {
    'backgroundColor': blueGrey800
  },
  github: {
    margin: 12,
  }
}

const AppBarExampleIconButton = (props) => (
  <AppBar
    style={styles.bar}
    title={<span style={styles.title}>Random Quote Generator</span>}
    iconElementRight={
      <FlatButton
        href='https://github.com/marcosfede/random-quote-machine'
        secondary={true}
        icon={<FontIcon className='fa fa-github' hoverColor={props.currentcolor} />}
        style={styles.github}
      />
    }
  />
)

export default AppBarExampleIconButton;
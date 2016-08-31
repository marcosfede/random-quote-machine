import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { grey800 } from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon';
import 'font-awesome/css/font-awesome.css'

function handleTouchTap () {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
  bar: {
    'backgroundColor': grey800
  },
  github: {
    margin: 12,
  }
};

const AppBarExampleIconButton = () => (
  <AppBar
    style={styles.bar}
    title={<span style={styles.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={
      <FlatButton
        href='https://github.com/marcosfede'
        secondary={true}
        icon={<FontIcon className='fa fa-github' />}
        style={styles.github}
      />
    }
  />
);

export default AppBarExampleIconButton;
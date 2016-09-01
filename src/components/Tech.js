import React, {Component} from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'


let style = {
   alignContent: 'center',
   margin: '60px auto',
   padding: '10px 10px',
   width: '70%',
   titleStyle: {
    fontSize: '120%'
  }
}

class Tech extends Component {
  render () {
  return (
  <Card id='tech' style={style} zDepth={4}>
    <CardHeader
      titleStyle={style.titleStyle}
      title='Technologies used:'
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <List>
        <ListItem secondaryText="Built into composable React components" primaryText='React' leftIcon={<ActionGrade />} />
        <ListItem secondaryText="Blundles dependencies into a single file" primaryText='Webpack' leftIcon={<ActionGrade />} />
        <ListItem secondaryText="Uses ajax to fetch a new quote every time!" primaryText='Consumes a REST API' leftIcon={<ActionGrade />} />
        <ListItem secondaryText="Beautiful Material Design" primaryText='Material-UI CSS Framework' leftIcon={<ActionGrade />} />
        <ListItem secondaryText="Icons for everything" primaryText='FontAwesome for the icons' leftIcon={<ActionGrade />} />
      </List>
    </CardText>
  </Card>
)
}
}

export default Tech

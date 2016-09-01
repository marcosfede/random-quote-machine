import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'

let style = {
  alignContent: 'center',
  margin: '60px auto',
  padding: '10px 10px',
  width: '70%'
}

const Tech = () => (
  <Card style={style} zDepth={4}>
    <CardHeader
      title='Technologies used:'
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <List>
        <ListItem primaryText='Built with React' leftIcon={<ContentInbox />}/>
        <ListItem primaryText='Bundled with Webpack' leftIcon={<ActionGrade />}/>
        <ListItem primaryText='Consumes a REST API using ajax' leftIcon={<ContentSend />}/>
        <ListItem primaryText='Material-UI CSS Framework' leftIcon={<ContentDrafts />}/>
        <ListItem primaryText='FontAwesome for the icons' leftIcon={<ContentInbox />}/>
      </List>
    </CardText>
  </Card>
)

export default Tech
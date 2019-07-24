import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom';
import {Link} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ResponsiveDrawer(props) {
  const classes = useStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[{label: 'Dashboard', path: '/'}, {label: 'Course Builder', path: '/course-builder'}, {label: 'Compaigns', path: '/campaigns'}, {label: 'Support', path: '/support'}].map((page, index) => (
          <ListItem button key={page.label}>
               <li>
                    <Link component={RouterLink} to={page.path}>{page.label}</Link>
                </li>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        {drawer}
    </Drawer>
  );
}

ResponsiveDrawer.propTypes = {
  container: PropTypes.object,
};
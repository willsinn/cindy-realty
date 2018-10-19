import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class App extends Component {
  render() {
    const { classes } = this.props;


    return (
      <div className={classes.root}>
      </div>
    );
  }
}
const styles = theme => ({
root: {},
});

export default withStyles(styles, {})(App);

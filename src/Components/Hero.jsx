import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class Hero extends Component {
  render() {
    const { classes } = this.props;


    return (
      <section className={classes.root}>
        <p> This is Hero </p>
      </section>
    );
  }
}
const styles = theme => ({
root: {},
});

export default withStyles(styles, {})(Hero);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Rentals extends Component {
  render(){
    const { classes } = this.props;
    return(
      <section className={classes.root}>
        <p className={classes.rentalsText}>
        This is the rentals section
        </p>
      </section>
    );
  }
}
const styles = theme => ({
root: {},
rentalsText: {},
});
export default withStyles(styles, {})(Rentals);

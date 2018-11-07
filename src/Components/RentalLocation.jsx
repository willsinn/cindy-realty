import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class RentalLocation extends Component {
  render(){
    const { classes } = this.props;
    return(
      <section className={classes.root}>
        <p className={classes.rentalLocationText}>
        This is the RentalLocation section
        </p>
      </section>
    );
  }
}
const styles = theme => ({
root: {},
rentalLocationText: {},
});
export default withStyles(styles, {})(RentalLocation);

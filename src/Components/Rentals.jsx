import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Rentals extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <p className={classes.rentalsText}>
        This is the rentals section
        </p>
      </div>
    );
  }
}
const styles = theme => ({
root: {},
rentalsText: {},
});
export default withStyles(styles, {})(Rentals);

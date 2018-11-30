import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import RentalOne from './RentalOne';

class Rentals extends Component {
  render(){
    const { classes } = this.props;
    return(
      <section className={classes.root}>
        <h1 className={classes.rentalsTitle}>
          This is the rentals section
        </h1>
        <div className={classes.rentalsListings}>
          <RentalOne/>
          <RentalOne/>
          <RentalOne/>
        </div>
      </section>
    );
  }
}
const styles = theme => ({
root: {
  paddingLeft: '5%',
  paddingRight: '5%',
  backgroundColor: 'green',
},
rentalsTitle: {},
rentalsListings: {
  display: 'flex',
  justifyContent: 'space-between',
},
});
export default withStyles(styles, {})(Rentals);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SaleOne from './SaleOne';

class Sales extends Component {
  render(){
    const { classes } = this.props;
    return(
      <section className={classes.root}>
        <h1 className={classes.salesTitle}>
          this is the sales section
        </h1>
        <div className={classes.salesListings}>
          <SaleOne />
          <SaleOne />
          <SaleOne />

        </div>
      </section>
    );
  }
}
const styles = theme => ({
root: {
  paddingLeft: '5%',
  paddingRight: '5%',

},
salesTitle: {},
salesListings: {
  display: 'flex',
  justifyContent: 'space-between',
},
});
export default withStyles(styles, {})(Sales);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Sales extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <p className={classes.salesText}>
          this is the sales section
        </p>
      </div>
    );
  }
}
const styles = theme => ({
root: {},
salesText: {},
});
export default withStyles(styles, {})(Sales);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Mission extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <p className={classes.missionText}>
        Sed tempor erat ac tincidunt eleifend. Maecenas ornare augue dolor, vitae volutpat lorem tristique nec. Fusce accumsan vulputate egestas. Mauris euismod ex augue, sit amet facilisis urna tristique vitae. Vivamus erat sem, dictum sit amet faucibus et, convallis quis turpis. Suspendisse tristique tellus sollicitudin nisl consequat, nec vehicula dui viverra. Donec nec sagittis odio. Nullam quis nisi vitae sapien tristique mollis.
        </p>
      </div>
    );
  }
}
const styles = theme => ({
root: {},
missionText: {},
});
export default withStyles(styles, {})(Mission);

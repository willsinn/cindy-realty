import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class About extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <p className={classes.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quam justo, sodales vitae urna sit amet, volutpat suscipit tortor. Nulla ut consectetur augue. Duis dictum velit et metus volutpat condimentum ut vel mauris. Donec pretium lorem tempus pretium mollis. Sed sit amet pulvinar felis. Phasellus at egestas est. Cras a malesuada mauris, quis posuere ante. Praesent hendrerit felis non malesuada laoreet. Nunc justo ipsum, faucibus feugiat neque id, eleifend tincidunt ipsum. Morbi vitae condimentum risus. Curabitur lacinia orci sodales, imperdiet elit ut, feugiat libero. Curabitur posuere eros ipsum, at eleifend arcu consequat ut. Etiam accumsan ornare convallis.
        </p>
      </div>
    );

  }
}

const styles = theme => ({
root: {},
aboutText: {},
});
export default withStyles(styles, {})(About);

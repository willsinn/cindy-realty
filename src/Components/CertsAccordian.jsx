import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';

class CertsAccordian extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div>
        <h1 className={classes.certsHeader}> my certifications </h1>
        <p className={classes.certsContent}>
        Duis purus ligula, accumsan vitae risus non, vehicula dictum ante. In lobortis aliquam mollis. Suspendisse egestas nulla sed lorem facilisis, ut tincidunt ex luctus. Nam fringilla dui lacinia, condimentum nisl ut, iaculis libero. Integer molestie cursus metus non pellentesque. Suspendisse ac maximus odio. Aliquam rhoncus vel ante et placerat. Vestibulum consectetur volutpat dui non porta. Fusce ac velit non eros finibus cursus id eget neque. Sed ac vulputate tellus, et ornare purus.
        </p>
      </div>
    );
  }
}
const styles = theme => ({
root: {},
certsHeader: {
  textTransform: 'uppercase',
},
certsContent: {},
});
export default withStyles(styles, {})(CertsAccordian);

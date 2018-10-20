import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class Hero extends Component {
  render() {
    const { classes } = this.props;


    return (
      <section className={classes.root}>
        <div className={classes.header}>
        </div>
        <div className={classes.body}>
          <div className={classes.menu}>
          </div>
          <div className={classes.info}>
            <div className={classes.about}></div>
            <div className={classes.mission}></div>
            <div className={classes.certifications}></div>
          </div>
        </div>
      </section>
    );
  }
}
const styles = theme => ({
root: {},
header: {},
body: {},
menu: {},
info: {},
about: {},
mission: {},
certifications: {},
});

export default withStyles(styles, {})(Hero);

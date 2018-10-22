import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroBg from '../Assets/HeroBg.jpeg';


class Hero extends Component {
  render() {
    const { classes } = this.props;


    return (
      <section className={classes.root}>

      </section>
    );
  }
}
const styles = theme => ({
root: {
  backgroundImage: `url(${ HeroBg })`,
  backgroundSize: 'cover',
},
});

export default withStyles(styles, {})(Hero);

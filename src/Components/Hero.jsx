import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroBg from '../Assets/HeroBg.jpeg';



class Hero extends Component {
  onToggleClick(e) {
    this.props.handleToggleClick(e);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <div className={classes.redirectContainer}>
         <div className={classes.textContainer}>
           <p className={classes.text}> Our city is defined by the people in it. What defines you </p>
         <div className={classes.redirectButton}>
           <button onClick={this.handleToggleClick.bind(e)}>
             Living
           </button>
         </div>
        </div>
      </div>
      </section>
    );
  }
}
const styles = theme => ({
root: {
  backgroundImage: `url(${ HeroBg })`,
  backgroundSize: 'cover',
},
textContainer: {},
text: {},
});

export default withStyles(styles, {})(Hero);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroBg from '../Assets/HeroBg.jpeg';



class Hero extends Component {
    constructor(props) {
      super(props);
    this.state = {
      renderActiveHero: true
    }
  }



  render() {
    const { classes } = this.props;
    var isActive = this.props.isActive;

    if (this.state.renderActiveHero === isActive) {



      return (
        <section className={classes.root}>
          <div className={classes.redirectContainer}>
           <div className={classes.textContainer}>
             <p className={classes.text}> Our city is defined by the people in it. What defines you </p>
           <div className={classes.redirectButton}>
             <button onClick={this.props.onTransitionPage}>
               Living
             </button>
           </div>
          </div>
        </div>
        </section>
      );

    } else {

        return null;
      }
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

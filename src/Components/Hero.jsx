import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroBg from '../Assets/HeroBg.jpeg';



class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    if(this.props.hero === 0) {
      return (
        <section className={classes.root}>
          <div className={classes.redirectContainer}>
           <div className={classes.textContainer}>
             <p className={classes.text}> Our city is defined by the people in it. What defines you </p>
           <div className={classes.redirectButton}>
             <button onClick={(e) => this.handleToggleClick.bind(this, this.props.onClick)}>
               Living
             </button>
           </div>
          </div>
        </div>
        {this.props.hero}
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

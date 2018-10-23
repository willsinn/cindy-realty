import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroBg from '../Assets/HeroBg.jpeg';



class Hero extends Component {
  constructor(props) {
    super(props);
  }
  handleActiveClick(e) {
    this.setState(prevState => ({
      activeIndex: prevState.activeIndex + 1
    }));
  }

  render() {
    const { classes } = this.props;
    const activeIndex = this.state.activeIndex;
    if(this.props.hero === 0) {
      return (
        <section className={classes.root}>
          <div className={classes.redirectContainer}>
           <div className={classes.textContainer}>
             <p className={classes.text}> Our city is defined by the people in it. What defines you </p>
           <div className={classes.redirectButton}>
             <button onClick={(e) => this.props.handleActiveClick(this.state.activeIndex)}>
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

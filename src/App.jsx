import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hero from './Components/Hero';
import Main from './Components/Main';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  onClick(e) {
    this.setState(prevState => ({
      activeIndex: prevState.activeIndex + 1
    }));
  }
  render() {
    const { classes } = this.props;


    return (
      <div className={classes.root}>
        <Hero hero={this.state.activeIndex} />
        <button onClick={this.onClick.bind(this)}>Main</button>
      </div>
    );
  }
}
const styles = theme => ({
root: {},
});

export default withStyles(styles, {})(App);

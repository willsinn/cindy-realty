import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hero from './Components/Hero';
import Main from './Components/Main';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
      activePage: 'hero'
    };
  }
  transitionPage(page) {
    return() => {
      this.setState({
        activePage: page
      });
    }
  }
  render() {
    const { classes } = this.props;


    return (
      <div className={classes.root}>
        <Hero
          isActive={this.state.activePage === 'hero'}
          onTransitionPage={this.transitionPage('main')}
          />
        <Main
          isActive={this.state.activePage === 'main'}/>
      </div>
    );
  }
}
const styles = theme => ({
root: {},
});

export default withStyles(styles, {})(App);

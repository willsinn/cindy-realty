import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hero from './Components/Hero';
import Main from './Components/Main';


class App extends Component {
  constructor() {
    super();
    this.state = {
      showHero: true,
      showMain: false,
    };
  }
  handleToggleClick(e) {
    this.setState(state => ({
      showHero: !state.showHero
    }));
    this.setState(state => ({
      showMain: !state.showMain
    }));

  }
  render() {
    const { classes, pages } = this.props;


    return (
      <div className={classes.root}>
        <Hero hero={this.state.showHero} />
        <Main main={this.state.showMain} />
        <button >
          {this.state.showMain ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
const styles = theme => ({
root: {},
});

export default withStyles(styles, {})(App);

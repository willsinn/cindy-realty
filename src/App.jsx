import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hero from './Components/Hero';
import Main from './Components/Main';


class App extends Component {
  constructor() {
    super();
    this.state = {
      isActivePage: false,
      pages:
    };
    this.setState((isActivePage, props) => ({
      return {
        isActivePage:
      }
    })
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  onToggleClick(e) {
    e.preventDefault();
    handleToggleClick = (e) => {
      if (isActivePage === false) {
        this.setState({
        isActivePage: true
      })} else {
        return null;
      }
    }
  }

  render() {
    const { classes } = this.props;

    const renderActiveHero = (props) => {
      return (
        <Hero
          isActivePage={isActivePage}
        />
      )
    }


    return (
      <div className={classes.root}>
          <Hero
            isActivePage='true'
            onToggleClick={this.handleToggleClick(e)}
          />
          <Main
            isActivePage='false'
            onClick={this.handleToggleClick(e)}
          />
      </div>
    );
  }
}
const styles = theme => ({
root: {},
});

export default withStyles(styles, {})(App);

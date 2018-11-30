import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CindyProfile from '../Assets/CindyProfile.jpeg';
import MainSloganBg from '../Assets/MainSloganBg.jpeg';
import StickyMenu from './StickyMenu';
import About from './About';
import Mission from './Mission';
import Certifications from './Certifications';
import Rentals from './Rentals';
import Sales from './Sales';


class Main extends Component {
  render() {
    const { classes } = this.props;
    if (this.props.isActive === true) {
      return (
      <section className={classes.root}>

        <div className={classes.header}>
          <div className={classes.headerPictureWrapper}>
            <img className={classes.profile} src={CindyProfile} />
          </div>
          <div className={classes.headerSloganWrapper}>
            <p className={classes.slogan}> " The Art of Living. Choosing the community, culture and people that will elevate you. "</p>
          </div>
          <StickyMenu />
        </div>
        <div className={classes.body}>
          <div className={classes.menu}>
          </div>
          <div className={classes.intro}>
              <Paper className={classes.about}>
                <h1 className={classes.aboutHeader}> about me </h1>
                <About />
              </Paper>
              <Paper className={classes.mission}>
                <h1 className={classes.missionHeader}> my mission </h1>
                <Mission />
              </Paper>
              <Paper className={classes.certs}>
                <h1 className={classes.certsHeader}> certifications </h1>
                <Certifications />
              </Paper>
          </div>
          <Rentals />
          <Sales />
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
  backgroundColor: 'yellow',
},
header: {
  display: 'flex',
  justifyContent: 'space-between',
},
headerPictureWrapper: {},
profile: {
  height: '150px',
  width: '150px',
},
headerSloganWrapper: {
  backgroundImage: `url(${ MainSloganBg })`,
  backgroundSize: 'cover',
},
slogan: {},
body: {},
menu: {},
intro: {
  paddingRight: '15%',
  paddingLeft: '15%',
},
about: {},
aboutHeader: {
  textTransform: 'uppercase',
},
mission: {},
missionHeader: {
  textTransform: 'uppercase',
},
certs: {},
certsHeader: {
  textTransform: 'uppercase',
},
});

export default withStyles(styles, {})(Main);

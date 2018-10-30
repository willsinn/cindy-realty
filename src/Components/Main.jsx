import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CindyProfile from '../Assets/CindyProfile.jpeg';
import MainSloganBg from '../Assets/MainSloganBg.jpeg';

import CertsExpansionPanels from './CertsExpansionPanels';


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
        </div>
        <div className={classes.body}>
          <div className={classes.menu}>
          </div>
          <div className={classes.intro}>
              <Paper className={classes.about}>
                <h1 className={classes.aboutHeader}> about me </h1>
                <p className={classes.aboutText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quam justo, sodales vitae urna sit amet, volutpat suscipit tortor. Nulla ut consectetur augue. Duis dictum velit et metus volutpat condimentum ut vel mauris. Donec pretium lorem tempus pretium mollis. Sed sit amet pulvinar felis. Phasellus at egestas est. Cras a malesuada mauris, quis posuere ante. Praesent hendrerit felis non malesuada laoreet. Nunc justo ipsum, faucibus feugiat neque id, eleifend tincidunt ipsum. Morbi vitae condimentum risus. Curabitur lacinia orci sodales, imperdiet elit ut, feugiat libero. Curabitur posuere eros ipsum, at eleifend arcu consequat ut. Etiam accumsan ornare convallis.
                </p>
              </Paper>
              <Paper className={classes.mission}>
                <h1 className={classes.missionHeader}> my mission </h1>
                <p className={classes.missionHText}>
                Sed tempor erat ac tincidunt eleifend. Maecenas ornare augue dolor, vitae volutpat lorem tristique nec. Fusce accumsan vulputate egestas. Mauris euismod ex augue, sit amet facilisis urna tristique vitae. Vivamus erat sem, dictum sit amet faucibus et, convallis quis turpis. Suspendisse tristique tellus sollicitudin nisl consequat, nec vehicula dui viverra. Donec nec sagittis odio. Nullam quis nisi vitae sapien tristique mollis.
                </p>
              </Paper>
              <Paper className={classes.certs}>
              <h1 className={classes.certsHeader}> certifications </h1>
                <CertsExpansionPanels />
              </Paper>
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
root: {},
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
aboutText: {},
mission: {},
missionHeader: {
  textTransform: 'uppercase',
},
missionText: {},
certs: {},
certsHeader: {
  textTransform: 'uppercase',
},
});

export default withStyles(styles, {})(Main);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CindyProfile from '../Assets/CindyProfile.jpeg';
import MainSloganBg from '../Assets/MainSloganBg.jpeg';


class Main extends Component {
  constructor(props) {
    super(props);

  this.state = {
    isActive: false
      };
    }

  render() {
    const { classes } = this.props;
    var page = this.props.page;



    if (this.state.isActive) {
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
          <div className={classes.info}>
            <div className={classes.about}></div>
            <div className={classes.mission}></div>
            <div className={classes.certifications}></div>
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
info: {},
about: {},
mission: {},
certifications: {},
});

export default withStyles(styles, {})(Main);

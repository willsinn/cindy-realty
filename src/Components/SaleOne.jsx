import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import OneLivingroom from '../Assets/SaleOne/OneLivingroom.jpeg';


class SaleOne extends Component {
  state = {
    expanded: false
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render(){
    const { classes } = this.props;
    return(
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="5 Bed, 2 Bath, Kitchen, Furnished"
          subheader="Brownstone Location, Location, Location"
        />
        <CardMedia
          className={classes.media}
          image={OneLivingroom}
          title="Brownstone Location Details"
        />
        <CardContent>
          <Typography component="p">
            How to get to Brownstone Location via public transit. Additional information on transit to location by car & bike.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="title">
              Location
            </Typography>
            <Typography paragraph>
              In depth description of the location & the community, culture & popularity by sub-group(hipsters, families, young professionals, college students, etc...).
            </Typography>
            <Typography variant="title">
              Property Details, Price
            </Typography>
            <Typography paragraph>
              Rooms, Baths, Building ammenities, Price, Contract Details
            </Typography>
            <Typography variant="title">
              Additional Information
            </Typography>
            <Typography paragraph>
              Other details about the rental the customer should know about
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

SaleOne.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
root: {},
card: {
  maxWidth: 400,
},
media: {
  height: 0,
  paddingTop: '56.25%', // 16:9
},
actions: {
  display: 'flex',
},
expand: {
  transform: 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  marginLeft: 'auto',
  [theme.breakpoints.up('sm')]: {
    marginRight: -8,
  },
},
expandOpen: {
  transform: 'rotate(180deg)',
},
avatar: {
  backgroundColor: red[500],
},
});
export default withStyles(styles, {})(SaleOne);

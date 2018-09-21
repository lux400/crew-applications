import * as React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { APPLIED, HIRED } from '../constants';
import { bindActionCreators } from 'redux';
import CrewActions from '../actions/crew';
import { getMemberCity, getMemberFullName } from '../utils';
import Avatar from '@material-ui/core/Avatar/Avatar';

const avatarStyles = {
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

class CrewCards extends React.Component {
  moveCrewForward = (id, status) => {
    this.props.actions.moveCrewForward({ id, status });
  };

  moveCrewBackward = (id, status) => {
    this.props.actions.moveCrewBackward({ id, status });
  };

  render() {
    const { statusCrew, status } = this.props;
    return (
      <Grid item xs={4}>
        {statusCrew.map((member, idx) => (
          <Paper key={idx} className="card">
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Avatar style={avatarStyles.bigAvatar} src={member.picture.medium} />
              </Grid>
              <Grid item xs={6}>
                <div>Name: {getMemberFullName(member)}</div>
                <div>City: {getMemberCity(member)}</div>
              </Grid>
            </Grid>
            <div>
              {status !== APPLIED ? (
                <IconButton
                  onClick={() => {
                    this.moveCrewBackward(member.id.value, status);
                  }}
                >
                  <ArrowBack />
                </IconButton>
              ) : null}

              {status !== HIRED ? (
                <IconButton
                  onClick={() => {
                    this.moveCrewForward(member.id.value, status);
                  }}
                >
                  <ArrowForward />
                </IconButton>
              ) : null}
            </div>
          </Paper>
        ))}
      </Grid>
    );
  }
}

export default connect(
  (state, props) => ({
    statusCrew: state.crew[props.status].filter(
      (m) =>
        getMemberFullName(m).includes(state.crew.filter) ||
        getMemberCity(m).includes(state.crew.filter),
    ),
  }),
  (dispatch) => ({
    actions: bindActionCreators(CrewActions, dispatch),
  }),
)(CrewCards);

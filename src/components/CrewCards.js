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

class CrewCards extends React.Component {
  getFullName = (member) => `${member.name.first} ${member.name.last}`;

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
            {status !== APPLIED ? (
              <IconButton
                onClick={() => {
                  this.moveCrewBackward(member.id.value, status);
                }}
              >
                <ArrowBack />
              </IconButton>
            ) : null}

            {this.getFullName(member)}

            {status !== HIRED ? (
              <IconButton
                onClick={() => {
                  this.moveCrewForward(member.id.value, status);
                }}
              >
                <ArrowForward />
              </IconButton>
            ) : null}
          </Paper>
        ))}
      </Grid>
    );
  }
}

export default connect(
  (state, props) => ({
    statusCrew: state.crew[props.status].filter((m) => m.name.first.includes(state.crew.filter)),
  }),
  (dispatch) => ({
    actions: bindActionCreators(CrewActions, dispatch),
  }),
)(CrewCards);

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CrewActions from '../actions/crew';
import Grid from '@material-ui/core/Grid';
import { APPLIED, HIRED, INTERVIEWING } from '../constants/index';
import CrewCards from '../components/CrewCards';
import TextField from '@material-ui/core/TextField/TextField';

const containerStyle = { maxWidth: 1024, margin: '0 auto' };

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.actions.loadCrew();
  }

  render() {
    const { crew: { filter } } = this.props;
    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-name"
            value={filter}
            onChange={(e) => {
              this.props.actions.filterCrew({ value: e.target.value });
            }}
            label="Name/City"
            margin="normal"
          />
        </form>
        <Grid container spacing={24} style={containerStyle}>
          <CrewCards status={APPLIED} />
          <CrewCards status={INTERVIEWING} />
          <CrewCards status={HIRED} />
        </Grid>
      </React.Fragment>
    );
  }
}
export default connect(
  (state) => ({
    crew: state.crew,
  }),
  (dispatch) => ({
    actions: bindActionCreators(CrewActions, dispatch),
  }),
)(Dashboard);

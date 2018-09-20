import { handleActions } from 'redux-actions';
import CrewActions from '../actions/crew';
import { APPLIED, CREW_FILTER, HIRED, INTERVIEWING } from '../constants';

export const crewReducer = handleActions(
  {
    [CrewActions.loadCrew]: (state) => ({
      ...state,
      filter: localStorage.getItem(CREW_FILTER) || '',
    }),
    [CrewActions.loadCrewSuccess]: (state, action) => ({
      ...state,
      applied: action.payload.results,
    }),

    [CrewActions.moveCrewForward]: (state, action) => {
      const { id, status } = action.payload;
      const nextStatus = action.payload.status === APPLIED ? INTERVIEWING : HIRED;
      const member = state[status].find((m) => m.id.value === id);
      return {
        ...state,
        [status]: state[status].filter((m) => m.id.value !== id),
        [nextStatus]: state[nextStatus].concat(member),
      };
    },
    [CrewActions.moveCrewBackward]: (state, action) => {
      const { id, status } = action.payload;
      const nextStatus = action.payload.status === HIRED ? INTERVIEWING : APPLIED;
      const member = state[status].find((m) => m.id.value === id);
      return {
        ...state,
        [status]: state[status].filter((m) => m.id.value !== id),
        [nextStatus]: state[nextStatus].concat(member),
      };
    },
    [CrewActions.filterCrew]: (state, action) => {
      localStorage.setItem(CREW_FILTER, action.payload.value);
      return {
        ...state,
        filter: action.payload.value,
      };
    },
  },
  {
    [APPLIED]: [],
    [INTERVIEWING]: [],
    [HIRED]: [],
    filter: '',
  },
);

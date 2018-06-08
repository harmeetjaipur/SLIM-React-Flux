import {
  AppConstants as AC,
} from '../../constants/app/actions';

export const AppActions = {
  receiveContract: payload => dispatch({ type: AC.DATA_RECEIVE, payload }),
};
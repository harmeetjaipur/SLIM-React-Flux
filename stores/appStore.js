import Store from './Store';
import { AppActions as AT } from '../constants/Actions';
import { register } from '../dispatcher';

let data = [];

const AppStore = {
  ...Store,
  getData: () => data,
  reducer: register(async ({ type, ...props }) => {
    switch (type) {
      case AT.DATA_RECEIVE:
        data = props.payload;
        break;
      default: return;
    }
    AppStore.emitChange();
  }),
};

export default AppStore;
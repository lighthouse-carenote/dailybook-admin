import MSG from '~/libs/msg';

interface IGlobalModal {
  open: boolean;
  text: string;
  callback: () => void;
}

export const INIT_GLOBAL_MODAL_STATE = 'INIT_GLOBAL_MODAL_STATE' as const;
export const CHANGE_GLOBAL_MODAL_STATE = 'CHANGE_GLOBAL_MODAL_STATE' as const;
export const OPEN_GLOBAL_MODAL = 'OPEN_GLOBAL_MODAL' as const;
export const CLOSE_GLOBAL_MODAL = 'CLOSE_GLOBAL_MODAL' as const;
export const CHANGE_TEXT_IN_GLOBAL_MODAL = 'CHANGE_TEXT_IN_GLOBAL_MODAL' as const;

export const initGlobalModalState = () => ({ type: INIT_GLOBAL_MODAL_STATE });
export const changeGlobalModalState = (payload: Partial<IGlobalModal>) => ({
  type: CHANGE_GLOBAL_MODAL_STATE,
  payload,
});
export const openGlobalModal = () => ({ type: OPEN_GLOBAL_MODAL });
export const closeGlobalModal = () => ({ type: CLOSE_GLOBAL_MODAL });
export const changeTextInGlobalModal = (payload: string) => ({
  type: CHANGE_TEXT_IN_GLOBAL_MODAL,
  payload,
});

type ActionType =
  | ReturnType<typeof initGlobalModalState>
  | ReturnType<typeof changeGlobalModalState>
  | ReturnType<typeof openGlobalModal>
  | ReturnType<typeof closeGlobalModal>
  | ReturnType<typeof changeTextInGlobalModal>;

const initialState: IGlobalModal = {
  open: false,
  text: '',
  callback: () => 0,
};

const globalModalReducer = (state: IGlobalModal = initialState, action: ActionType): IGlobalModal => {
  switch (action.type) {
    case INIT_GLOBAL_MODAL_STATE:
      return {
        ...initialState,
      };

    case CHANGE_GLOBAL_MODAL_STATE:
      if (!window.navigator.onLine) {
        if (!!action.payload.text) {
          action.payload.text = MSG.API.ERROR.CHECK_NETWORK;
        }
        action.payload.callback = () => 0;
      }

      return {
        ...state,
        ...action.payload,
      };

    case OPEN_GLOBAL_MODAL:
      return {
        ...state,
        open: true,
      };

    case CLOSE_GLOBAL_MODAL:
      return {
        ...state,
        open: false,
        callback: () => 0,
      };

    case CHANGE_TEXT_IN_GLOBAL_MODAL:
      return {
        ...state,
        text: action.payload,
      };

    default:
      return state;
  }
};

export default globalModalReducer;

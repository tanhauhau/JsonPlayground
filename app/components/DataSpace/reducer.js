export const PUSH_DATA = 'DataSpace@PUSH_DATA'
export const POP_DATA = 'DataSpace@POP_DATA'
export const REMOVE_DATA = 'DataSpace@REMOVE_DATA'

export const DataSpaceActions = {
  pushData: (name, data) => ({
    type: PUSH_DATA,
    name,
    data
  }),
  popData: () => ({
    type: POP_DATA
  }),
  removeData: (index) => ({
    type: REMOVE_DATA,
    index
  })
};

export const DataSpaceReducer = (state: array<Object> = [], action) => {
  switch (action.type) {
    case PUSH_DATA:
      return [...state, { name: action.name, value: action.data }];
    case POP_DATA:
      return [...state.slice(0, state.length - 1)];
    case REMOVE_DATA:
      return [...state.slice(0, state.index), ...state.slice(state.index + 1)];
    default:
      return state;
  }
};

import { appDataUniversalForAllUsers } from "@/data/appDataUniversalForAllUsers";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// Why not useContext? Because useContext forces children to rerender in some cases
// (when there's a non-useRef value, like useState, for example) so it's not an
// actual substitute for a state management tool like Redux. That's cleaner, actually
const contexts = {
  Global: {
    appDataUniversalForAllUsers: appDataUniversalForAllUsers,
  },
  // ChildA: {},
};

// For forcing rerenders of components. It's esepcially usefull when ChildA should force a rerender of ChildB, without rerendering the whole Parent
const forceRerender = {
  // ChildA: false,
  // ChildB: false,
};

const contextsSlice = createSlice({
  name: "contextsSlice",
  initialState: contexts,
  reducers: {
    setContextKeyValue(
      state,
      action: PayloadAction<{
        contextName: string;
        keyName: string;
        newValue: any;
      }>
    ) {
      state[action.payload.contextName][action.payload.keyName] =
        action.payload.newValue;
    },
  },
});

const forceRerenderSlice = createSlice({
  name: "forceRerenderSlice",
  initialState: forceRerender,
  reducers: {
    forceRerender(state, action: PayloadAction<string>) {
      state[action.payload] = !state[action.payload];
    },
  },
});

const store = configureStore({
  reducer: {
    forceRerenderReducer: forceRerenderSlice.reducer,

    contextsReducer: contextsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const contextsSliceActions = contextsSlice.actions;
export const forceRerenderSliceActions = forceRerenderSlice.actions;

export default store;

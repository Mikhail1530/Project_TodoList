import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "app",
  initialState: {
    isInitialized: false,
    status: "idle" as RequestStatusType,
    error: null as string | null,
  },
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status
    },
    setIsInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized
    },
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions

export type InitialStateType = ReturnType<typeof slice.getInitialState>
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

// const initialState: InitialStateType = {
//   isInitialized: false,
//   status: "idle",
//   error: null,
// };

// export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
//   switch (action.type) {
//     case "APP/SET-INITIALIZED":
//       return { ...state, isInitialized: action.isInitialized };
//     case "APP/SET-STATUS":
//       return { ...state, status: action.status };
//     case "APP/SET-ERROR":
//       return { ...state, error: action.error };
//     default:
//       return { ...state };
//   }
// };

// export type InitialStateType = {
//   isInitialized: boolean;
//   status: RequestStatusType;
//   error: string | null;
// };

// export const setAppErrorAC = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;
// export const setAppStatusAC = (status: RequestStatusType) => ({ type: "APP/SET-STATUS", status }) as const;
// export const setIsInitializedAC = (isInitialized: boolean) => ({ type: "APP/SET-INITIALIZED", isInitialized }) as const;

// export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
// export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
// export type SetIsInitializedType = ReturnType<typeof setIsInitializedAC>;

// type ActionsType = SetAppErrorActionType | SetAppStatusActionType | SetIsInitializedType;

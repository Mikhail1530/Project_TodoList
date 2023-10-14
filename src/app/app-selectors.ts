import { AppRootStateType } from "./store"

// export const selectIsLoggedIn = (state: AppRootStateType) => state.auth.isLoggedIn
export const selectStatus = (state: AppRootStateType) => state.app.status
export const selectIsInitialized = (state: AppRootStateType) => state.app.isInitialized
export const selectError = (state: AppRootStateType) => state.app.error

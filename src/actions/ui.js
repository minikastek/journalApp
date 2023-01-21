import { types } from "../components/types/types";


export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const uiRemoveError = (err) => ({
    type: types.uiRemoveError
});

export const startLoading = () => ({
    type: types.uiStartLoading
});

export const finishLoading = () => ({
    type: types.uiFinishLoading
});
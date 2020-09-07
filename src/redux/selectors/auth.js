import { createSelector } from 'reselect';

const selectAuthReducer = (state) => state && state.authReducer;

const selectAuth = createSelector(selectAuthReducer, (reducer) => {
    return reducer && reducer.user;
});

export { selectAuth };
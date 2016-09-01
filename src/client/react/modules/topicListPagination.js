import fetch from 'isomorphic-fetch';

import {_load} from './topics';

export const JUMP = 'clubo/topicListPagination/JUMP';

const initialState = {
    offset: 2,
    current: 1,
    count: 0
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case JUMP:
            return {
                ...initialState,
                current: action.page
            }
        default:
            return state;
    }
}

export const _jump = (query) => {
    return async (dispatch) => {
        let page = query.page == undefined ? 1 : query.page;
        await dispatch(_load(query));
        dispatch(jump(page));
    }
}

export function jump(page) {
    return {
        type: JUMP,
        page
    }
}
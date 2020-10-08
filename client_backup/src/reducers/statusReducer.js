
export const statusReducer = (state = {}, action) => {
    if (action.type === 'PENDING'){
        return {...state,
            [action.name]: action.type,
            loading: true,
        }
    }
    if (action.type === 'REJECT'){
        return {...state,
            [action.name]: action.error,
            loading: false
        }

    }
    if (action.type === 'RESOLVED'){
        return {...state,
            [action.name]: action.payload,
            loading: false
        }
    }
    return state;
};
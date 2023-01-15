const initialState = {
    user : {
        isLogin: false,
        name: 'zeroCho',
        age: 27,
        pw: 'babo',

}}

const login = (data) => {
    return {
        type:'LOG_IN',
        data,
    }
}

const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    } 
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_NICKNAME' : {
            return {
                ...state,
                name: action.data,
            }
        }
        case 'LOG_IN' : {
            return {
                ...state,
                user: {
                    ...state.user,
                    isLogin : true,
                }
            }
        }
    }
}
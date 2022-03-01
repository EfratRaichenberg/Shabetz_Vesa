//const { default: User } = require("../components/User");

const init = {
    user:{
        UserId: '',
        UserNAme: '',
        password:'',
        Type:'',
        mail: '',
        phone : '',
        City : '',
        Neighborhood : '',
        Street: '',
        Status:false
    }
}

const userReducer = function (state = init, action) {
    switch (action.type) {
        case "SET_USER":
            return {...state, user: action.user}

        default:
            return state;
    }
};

export default userReducer;
import decode from 'jwt-decode'

export const userReducer = (state, action) => {
  if (!state){
    if(localStorage.getItem('token')) {
      action.type ='AUTH_LOGIN';
      action.token = JSON.parse(localStorage.getItem('token'));
    }
    else return {
      loggedIn: false,
    };
  }

  if(action.type === "AUTH_LOGIN"){
    if(action.message) {
      return {
        loginMessage: action.message,
        status: action.status,
      };
    }
    else{
      localStorage.setItem('token', JSON.stringify(action.token));
      return {
        token: action.token,
        status: action.status,
        loggedIn: true,
        userData: action.userData
      }
    }
  }

  if (action.type === 'AUTH_LOGOUT'){
    localStorage.clear();
    return {
      loggedIn: false,
    }
  }

  if(action.type === 'REGISTRATION'){
    if(action.message === 'USER WAS CREATED'){
      localStorage.setItem('token', JSON.stringify(action.token));
      return{
        token: action.token,
        status: action.status,
        loggedIn: true,
        userData: action.userData
      }
    }else{
      return {
        registerMessage: action.message,
        status: action.status,
      }
    }
  }
  return state;
};
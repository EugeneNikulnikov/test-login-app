export const actionPending = name => ({type: "PENDING", name});
export const actionRejected = (error, name) => ({type: "REJECT", error, name});
export const actionResolved = (payload, name) => ({type: "RESOLVED", payload, name});

export const actionAuthLogin = ({token, message, status, ...userData}) =>
    ({type: 'AUTH_LOGIN', token, userData, message, status});
export const actionLogout = () => ({type: 'AUTH_LOGOUT'});
export const actionRegistration = ({status, message, name, token, ...userData}) =>
    ({type:'REGISTRATION', status, message, name, token, userData});
export const actionGetUsers = (users, name) => ({type: 'GET_USERS', users, name});
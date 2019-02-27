import {getRoles} from "./jwt_helper";

export function saveAuthInfo(token) {
    saveItem('authToken', token);
    const roles = getRoles(token);
    if (roles) {
        saveItem('roles', JSON.stringify(roles))
    }
}

export function removeAuthInfo() {
    removeItem('authToken');
    removeItem('roles');
}

export function getUserRoles() {
    if (localStorage.getItem("roles")) {
        return JSON.parse(localStorage.getItem("roles"));
    }

    return null;
}

export function saveItem(key, value) {
    localStorage.setItem(key, value);
}

export function getItem(key) {
    return localStorage.getItem(key)
}

export function removeItem(key) {
    localStorage.removeItem(key);
}

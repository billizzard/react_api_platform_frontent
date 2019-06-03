import {getRoles} from "./jwtHelper";
import {ROLES_KEY, TOKEN_KEY} from "../constants/storage";

export function saveAuthInfo(token: string): void {
    saveItem(TOKEN_KEY, token);
    const roles = getRoles(token);
    if (roles) {
        saveItem(ROLES_KEY, JSON.stringify(roles))
    }
}

export function removeAuthInfo(): void {
    removeItem(TOKEN_KEY);
    removeItem(ROLES_KEY);
}

export function getUserRoles(): Array<string> | null {
    if (localStorage.getItem(ROLES_KEY)) {
        const roles = localStorage.getItem(ROLES_KEY);
        if (roles) {
            return JSON.parse(roles);
        }
    }

    return null;
}

export function saveItem(key: string, value: string): void {
    localStorage.setItem(key, value);
}

export function getItem(key:string): string | null {
    return localStorage.getItem(key)
}

export function removeItem(key: string): void {
    localStorage.removeItem(key);
}

import {getRoles} from "./jwtHelper";

export function saveAuthInfo(token: string): void {
    saveItem('authToken', token);
    const roles = getRoles(token);
    if (roles) {
        saveItem('roles', JSON.stringify(roles))
    }
}

export function removeAuthInfo(): void {
    removeItem('authToken');
    removeItem('roles');
}

export function getUserRoles(): Array<string> | null {
    if (localStorage.getItem("roles")) {
        const roles = localStorage.getItem("roles");
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

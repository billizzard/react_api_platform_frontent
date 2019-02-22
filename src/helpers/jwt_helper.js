export function getRoles(token) {
    const payload = parseJWT(token);
    return payload && payload.roles ? payload.roles : null;
}

export function parseJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
}
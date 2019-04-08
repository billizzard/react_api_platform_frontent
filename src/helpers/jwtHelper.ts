export function getRoles(token: string): [] | null {
    const payload = parseJWT(token);
    console.log('%c PAYLOAD', 'background: orange; color: red;');
    console.log(payload)
    return payload && payload.roles ? payload.roles : null;
}

export function parseJWT(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
}
export function storeUser(data) {
    const expirationTime = Date.now() + 1800000;
    localStorage.setItem(
        'user', 
        JSON.stringify({
            username: data.user.username,
            jwt: data.jwt,
            expirationTime: expirationTime,
        })
    );
    setTimeout(() => {
        localStorage.removeItem('user');
    }, 1800000);
}

export function userData() {
    const stringfiedUser = localStorage.getItem('user') || "";
    if (stringfiedUser) {
        return JSON.parse(stringfiedUser);
    }
    return false;
}
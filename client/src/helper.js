export function storeUser(data) {
    localStorage.setItem(
        'user', 
        JSON.stringify({
            username: data.user.username,
            jwt: data.jwt,
        })
    );
}

export function userData() {
    const stringfiedUser = localStorage.getItem('user') || "";
    if (stringfiedUser) {
        return JSON.parse(stringfiedUser);
    }
    return false;
}
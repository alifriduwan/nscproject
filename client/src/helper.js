export const storeUser = () => {
    localStorage.setItem(
        'user', 
        JSON.stringify({
            username: res.user.username,
            admin: res.user.admin,
            jwt: res.jwt,
        })
    )
}

export const userData = () => {
    const stringfiedUser = localStorage.getItem('user') || ""
    if (stringfiedUser) {
        return JSON.parse(stringfiedUser)
    }
    return false
}

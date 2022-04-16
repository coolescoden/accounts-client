/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

export let baseUrl = "http://localhost:3000/api/v1/accounts"

export async function createAccount(username: string, password: string, email: string) {
    const r = await fetch(`${baseUrl}/account/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password,
            email
        })
    });

    return await r.json();
}

export async function deleteAccount(username: string, password: string) {
    const r = await fetch(`${baseUrl}/account/delete`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    return await r.json();
}

export async function createToken(username: string, password: string, permissions: string[] = ["ADMIN"]) {
    const r = await fetch(`${baseUrl}/account/token/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password,
            permissions
        })
    });

    return await r.json();
}

export async function deleteToken(username: string, password: string, token: string) {
    const r = await fetch(`${baseUrl}/account/token/delete`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password,
            token
        })
    });

    return await r.json();
}

export async function login(token: string) {
    const r = await fetch(`${baseUrl}/account/token/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token
        })
    });

    return await r.json();
}

export async function refreshToken(token: string) {
    const r = await fetch(`${baseUrl}/account/token/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token
        })
    });

    return await r.json();
}

export async function updateUsername(token: string, newUsername: string) {
    const r = await fetch(`${baseUrl}/account/update/username`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            newUsername
        })
    });

    return await r.json();
}

export async function updatePassword(token: string, oldPassword: string, newPassword: string) {
    const r = await fetch(`${baseUrl}/account/update/password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            oldPassword,
            newPassword
        })
    });

    return await r.json();
}

export async function updateEmail(token: string, newEmail: string) {
    const r = await fetch(`${baseUrl}/account/update/email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            newEmail
        })
    });

    return await r.json();
}

export async function createData(token: string, data: object | string) {
    const r = await fetch(`${baseUrl}/data/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            data
        })
    });

    return await r.json();
}

export async function updateData(token: string, data: object) {
    const r = await fetch(`${baseUrl}/data/update`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            data
        })
    });

    return await r.json();
}

export async function getData(token: string, id: string) {
    const r = await fetch(`${baseUrl}/data/get`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            dataId: id
        })
    });

    return await r.json();
}

export async function deleteData(token: string, id: string) {
    const r = await fetch(`${baseUrl}/data/delete`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            dataId: id
        })
    });

    return await r.json();
}

export async function setPermissions(token: string, dataId: string, permissions: string[], user: string) {
    const r = await fetch(`${baseUrl}/data/permissions/set`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            dataId,
            permissions,
            user
        })
    });

    return await r.json();
}

export async function removeUser(token: string, dataId: string, user: string) {
    const r = await fetch(`${baseUrl}/data/permissions/remove`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            dataId,
            user
        })
    });

    return await r.json();
}
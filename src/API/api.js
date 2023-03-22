const baseUrl = 'http://164.92.190.147:8028/api/v1/'

export const API = {
    get: async (url) => {
        const r = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await r.json()
    },
    post: async (url, body) => {
        console.log(body);
        const r = await fetch(`${baseUrl}${url}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await r.json()
    }
}
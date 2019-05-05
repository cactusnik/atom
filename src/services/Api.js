export default class Api {
    constructor() {
        this.apiBase = 'https://cors-anywhere.herokuapp.com/http://cde.pp.ua/api/v1'
    }

    headers = () => {
        const requestHeader = new Headers()
        const bearer = 'Bearer  ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6Ik9HTXpNbVprTjJNMk5EZzBZbVkzWWpKbVpHVmlZbVZtTmpnd1pXWXpPR1EyTjJOak1UazFabUpqTmpSa01qZzNNek14WVRjek5EQmxPR05qWkRReU5nPT0ifQ.eyJpc3MiOiJodHRwOlwvXC9hdG9teS5jYyIsImp0aSI6Ik9HTXpNbVprTjJNMk5EZzBZbVkzWWpKbVpHVmlZbVZtTmpnd1pXWXpPR1EyTjJOak1UazFabUpqTmpSa01qZzNNek14WVRjek5EQmxPR05qWkRReU5nPT0iLCJpYXQiOjE1NTY4MjU0MjAsImV4cCI6MTU1NjgzMjYyMCwibmJmIjoxNTU2ODI1NDIwLCJ1aWQiOjE4LCJ0eXBlIjoiYWNjZXNzIn0.HL2o0vA7TegDWYqjCmTU794eGZE43R_U74UjqjWQQLw';
        requestHeader.append('Accept', 'application/json, text/plain, */*')
        requestHeader.append('Content-Type', 'application/json')
        requestHeader.append('Authorization', bearer)

        return requestHeader
    }

    request = async (method, path, body) => {
        const url = `${this.apiBase}${path}`
        const options = {
            method,
            headers: this.headers()
        }

        if (body) {
            options.body = JSON.stringify(body)
        }

        const res = await fetch(url, options)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json()
    }

    get = (path) => {
        return this.request('GET', path)
    }

    post = (path, data = {}) => {
        return this.request('POST', path, data)
    }

    put = (path, data = {}) => {
        return this.request('PUT', path, data)
    }

    delete = (path) => {
        return this.request('DELETE', path)
    }
}

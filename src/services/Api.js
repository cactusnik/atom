export default class Api {
    constructor() {
        this.apiBase = 'https://cors-anywhere.herokuapp.com/http://cde.pp.ua/api/v1'
    }

    headers = () => {
        const requestHeader = new Headers()
        const bearer = 'Bearer  ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6Ik1USmlNall4WXpaa1ptSmhaR0ZsTm1NeU5qTTVabUZoTTJSbVlXSTFOR0V3TURNeVlUVXhPVGhqWWpsaVpqSXpaRGt6T1RBelpETmxPR1k0WlRReE53PT0ifQ.eyJpc3MiOiJodHRwOlwvXC9hdG9teS5jYyIsImp0aSI6Ik1USmlNall4WXpaa1ptSmhaR0ZsTm1NeU5qTTVabUZoTTJSbVlXSTFOR0V3TURNeVlUVXhPVGhqWWpsaVpqSXpaRGt6T1RBelpETmxPR1k0WlRReE53PT0iLCJpYXQiOjE1NTU0NDI3NDcsImV4cCI6MTU1NTQ0OTk0NywibmJmIjoxNTU1NDQyNzQ3LCJ1aWQiOjE4LCJ0eXBlIjoiYWNjZXNzIn0.WdEOMUehLHTUPc7i86p-WVLKEjxGUGQ2q95LHb3MhRQ';
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

        const jsonData = await res.json()
        console.log(jsonData)

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

export default class Api {
    constructor() {
        this.apiBase = 'https://cors-anywhere.herokuapp.com/http://cde.pp.ua/api/v1'
    }

    headers = () => {
        const requestHeader = new Headers()
        const bearer = 'Bearer  ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IllXVXdZamszTjJFellUaGtabVkyWkRVMlltSmxPRE16WTJVNU1XWTNNelV6WkRNME16TTFOREUzTWpobE5EUmhaR1ZqTkRNd1pHSTBOR0kwTkRjNE1nPT0ifQ.eyJpc3MiOiJodHRwOlwvXC9hdG9teS5jYyIsImp0aSI6IllXVXdZamszTjJFellUaGtabVkyWkRVMlltSmxPRE16WTJVNU1XWTNNelV6WkRNME16TTFOREUzTWpobE5EUmhaR1ZqTkRNd1pHSTBOR0kwTkRjNE1nPT0iLCJpYXQiOjE1NTYyMjY3NDcsImV4cCI6MTU1NjIzMzk0NywibmJmIjoxNTU2MjI2NzQ3LCJ1aWQiOjE4LCJ0eXBlIjoiYWNjZXNzIn0.0YBkq6HSDQxhx9-XiH9Qf7sp3U2dhMO3Xw6pkqn8D3o';
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

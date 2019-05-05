import { authHeader } from '../helpers/auth-header'

export default class Api {
    constructor() {
        this.apiBase = 'https://cors-anywhere.herokuapp.com/http://cde.pp.ua/api/v1'
    }

    headers = () => {
        const requestHeader = new Headers()
        requestHeader.append('Accept', 'application/json, text/plain, */*')
        requestHeader.append('Content-Type', 'application/json')
        requestHeader.append('Authorization', authHeader())

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

export const msgFetch = (url, data = {}, method) => {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=> res.json())
        .catch(e => console.log(e.name, e))
};

export const msgFetchGET = (url, method) => {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res=> res.json())
        .catch(e => console.log(e.name, e))
};
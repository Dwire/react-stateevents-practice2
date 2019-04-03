const BASE_URL = 'http://localhost:4000/beys/'

const patchOptions = (beyObj) => {
  return {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(beyObj)
  }
}

const beyAdapter = {
  get: () => fetch(BASE_URL).then(res => res.json()),
  patch: (beyObj) => fetch(BASE_URL + beyObj.id, patchOptions(beyObj)).then(res => res.json())
}

export default beyAdapter

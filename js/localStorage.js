
const getDataFromLocalStore = (key = '', defaultValue = []) => {
    const stringValues = localStorage.getItem(key)

    return JSON.parse(stringValues) || defaultValue
}

const setDataToLocalStore = (key = '', values = []) => {
    const isStringValues = typeof values === 'string'
    localStorage.setItem(key, isStringValues ? values : JSON.stringify(values))
}

const addObjDataToLocalStore = (key = '', obj = {}) => {
    let values = getDataFromLocalStore(key)
    values.push(obj)

    setDataToLocalStore(key, values)
}
import R from 'ramda'

export const createAsyncActionType = (prefix) => {
  const obj = {}
  obj[`${prefix}_REQUEST`] = `${prefix}_REQUEST`
  obj[`${prefix}_SUCCESS`] = `${prefix}_SUCCESS`
  obj[`${prefix}_FAILURE`] = `${prefix}_FAILURE`
  return obj
}

export const createSyncActionType = (prefix) => {
  const obj = {}
  obj[prefix] = prefix
  return obj
}

// These functions are for generating a list of types
export const createAsyncActions = (...col) => col.reduce((acc, el) => R.merge(acc, createAsyncActionType(el)), {})
export const createSyncActions = (...col) => col.reduce((acc, el) => R.merge(acc, createSyncActionType(el)), {})
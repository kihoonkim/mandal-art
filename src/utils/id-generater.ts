import short from 'short-uuid'

export function newId() {
  return short.generate()
}

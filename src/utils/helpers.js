export function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString()
}

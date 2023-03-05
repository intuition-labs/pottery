export function removeNullFields(input: any): any {
  if (typeof input === 'object' && !(input instanceof Date) && input !== null) {
    if (input instanceof Array) {
      return input
        .map(removeNullFields)
        .filter((item) => item !== null && item !== undefined)
    }

    return Object.fromEntries(
      Object.entries(input)
        .map(([key, val]) => [key, removeNullFields(val)])
        .filter(([k, v]) => v !== null && v !== undefined)
    )
  }

  return input
}

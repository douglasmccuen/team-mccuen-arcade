export const previous = (length: number, current: number) => {
  return (current - 1 + length) % length;
}

export const next = (length: number, current: number) => {
  return (current + 1) % length;
}

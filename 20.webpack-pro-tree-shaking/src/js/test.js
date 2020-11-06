export function mul(...args) {
  return args.reduce((p, c) => p * c, 1);
}

export function count(...args) {
  return args.reduce((p, c) => p + c, 0);
}

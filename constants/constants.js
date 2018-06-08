export const AppActions = [
  'DATA_RECEIVE',
  // all the event actions go here
].reduce((p, v) => ((p[v] = Symbol(v)), p), {});
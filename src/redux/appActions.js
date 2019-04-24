
/*
 * action types
 */

export const CHANGE_HEADER = 'CHANGE_HEADER';

/*
 * action creators
 */

export function changeHeader(headerAppearance = {} ) {
  console.log('action change header triggered')
  return { type: CHANGE_HEADER, headerAppearance }
}
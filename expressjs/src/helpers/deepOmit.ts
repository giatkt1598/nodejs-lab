import { omit } from "lodash"

/**
 * ![Markdown](https://i1.silvergames.com/j/b/omit-orange.jpg)
 * ## Description
 * Omit properties of **object** or **array**
 * 
 * ## Example
 * ```ts
 * const originalObj = {
 *  id: 1,
 *  name: "John Doe",
 *  children: [
 *    {
 *    name: "Dave",
 *    DateOfBirth: "2003/07/22"
 *    }
 *  ]
 * };
 * const omittedNameObj = deepOmit(originalObj, "name");
 * // result:
 * // omittedNameObj = {
 * //  id: 1,
 * //  children: [
 * //    {
 * //    DateOfBirth: "2003/07/22"
 * //    }
 * //  ]
 * // };
 * ```
 * @param obj object or array
 * @param properties properties of object or child of array
 * @returns object or array
 */
export function deepOmit(obj: any, ...properties: string[]): any {
  if (Array.isArray(obj)) {
    return obj.map(v => deepOmit(v, ...properties));
  } else if (obj != null && obj.constructor === Object) {
    return omit(obj, properties);
  }
  return obj;
};
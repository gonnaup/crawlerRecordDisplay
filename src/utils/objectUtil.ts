/**
 * 去除object中value为undefined和空串的属性
 * @param obj
 */
export function removeEmptyUndefined(obj: any) {
  for (const key in obj) {
    if (!obj[key] || !obj[key].trim()) {
      delete obj[key];
    }
  }
}

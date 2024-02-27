/**
 * a function that takes a string and returns a normalized path for `links`
 * @param {string} link
 * @returns {string}
 */
export function normalizeLink(link: string): string {
  return link.replace(/\s+/g, "-").toLowerCase();
}

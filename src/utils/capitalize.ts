/**
 * capitalizing a string and removing any spaces within it.
 * @param {string} string
 * @returns string
 */
export function capitalize(string: string): string {
  const capitalizedString =
    string.replace(/%|20/g, " ").charAt(0).toUpperCase() +
    string.slice(1).replace(/%|20/g, " ");
  return capitalizedString;
}

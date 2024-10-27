/**
 * Capitalises the first letter of a given string and converts the rest of the string to lowercase.
 *
 * @param str - The string to be transformed.
 * @returns The transformed string with the first letter in uppercase and the rest in lowercase.
 */
export const capitaliseFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

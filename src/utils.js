// Your code here
// utils.js

/**
 * Calculates the current age based on the provided birth year.
 * @param {number} birthYear - The year the person was born.
 * @returns {number} The person's current age.
 */
export function currentAgeForBirthYear(birthYear) {
  return new Date().getFullYear() - birthYear;
}

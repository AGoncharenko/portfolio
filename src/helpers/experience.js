const START_DATE = new Date(2013, 1); // February 2013

export function getYearsExperience() {
  return Math.floor(
    (new Date() - START_DATE) / (1000 * 60 * 60 * 24 * 365.25)
  );
}
export const getReleasedYear = (release_date: string): number => {
  const year: number = new Date(release_date).getFullYear();
  return year;
};

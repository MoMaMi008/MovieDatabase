export const getReleasedYear = (release_date: string): number => {
  const year: number = new Date(release_date).getFullYear();
  return year;
};
export const formatRuntime = (runtime: number): string => {
  const formattedRuntime: string = `  ${Math.floor(runtime / 60)}h ${
    runtime % 60
  }m`;
  return formattedRuntime;
};

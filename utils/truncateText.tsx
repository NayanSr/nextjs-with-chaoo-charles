export const truncateText = (str: string, value: number) => {
  if (str.length < value) {
    return str;
  }
  return str.substring(0, value) + "...";
};

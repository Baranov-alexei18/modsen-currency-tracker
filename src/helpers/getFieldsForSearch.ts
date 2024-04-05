export const getFieldsForSearch = (obj: unknown): void => {
  Object.values(obj).forEach((value) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      getFieldsForSearch(value);
    }
  });
};

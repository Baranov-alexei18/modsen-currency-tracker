/* eslint-disable @typescript-eslint/no-explicit-any */
export const getFieldsForElasticSearch = (arr:unknown[], value:string):unknown[] => {
  const fields: Set<unknown> = new Set();

  const getFields = (obj: any): void => {
    Object.values(obj).forEach((value) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        getFields(value);
      }
    });
  };

  arr.forEach((item) => {
    getFields(item);
    Object.values(item).forEach((val) => {
      if (Array.isArray(val)) {
        val.forEach((subVal) => {
          if (String(subVal).toLowerCase().includes(value.toLowerCase())) {
            fields.add(subVal);
          }
        });
      } else if (String(val).toLowerCase().includes(value.toLowerCase())) {
        fields.add(val);
      }
    });
  });

  if (!fields.size) return ['Not found'];

  return Array.from(fields);
};

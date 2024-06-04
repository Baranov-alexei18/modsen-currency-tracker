import { getFieldsForSearch } from '@/helpers/getFieldsForSearch';

export const getFieldsForElasticSearch = (arr: unknown[], value: string): unknown[] => {
  const fields: Set<unknown> = new Set();

  arr.forEach((item) => {
    getFieldsForSearch(item);
    Object.values(item).forEach((val) => {
      if (Array.isArray(val)) {
        val.forEach((subVal) => {
          if (typeof subVal !== 'number' && String(subVal).toLowerCase().includes(value.toLowerCase())) {
            fields.add(subVal);
          }
        });
      } else if (typeof val !== 'number' && String(val).toLowerCase().includes(value.toLowerCase())) {
        fields.add(val);
      }
    });
  });

  if (!fields.size) return ['Not found'];

  return Array.from(fields);
};

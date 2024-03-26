/* eslint-disable no-restricted-syntax */
export const getFieldsForElasticSearch = (arr:unknown[], value:string) => {
  const fields = new Set();

  function getFields(obj:any) {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        getFields(obj[key]);
      }
    }
  }

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

  return Array.from(fields);
};

// import { CategoryFormData } from "./constants";

export function arr2obj(arr) {
  const obj = {};

  arr.forEach((v) => {
    const key = v[0];
    const value = v[1];
    obj[key] = value;
  });
  return obj;
}

// eslint-disable-next-line import/prefer-default-export
export const convertToFormData = (type, data) => {
  const formData = new FormData();

  if (!data) return null;

  const exceptions = ["description_ru", "description_uz", "description_en"];

  // eslint-disable-next-line no-restricted-syntax
  for (const key in data) {
    if (data[key]) {
      // in case if description_xx was changed
      const isException = exceptions.findIndex((e) => e === key) > -1;
      if (isException && Array.isArray(data[key])) {
        formData.append(key, JSON.stringify(data[key]));
      } else {
        formData.append(key, data[key]);
      }
    }
  }

  return formData;
};

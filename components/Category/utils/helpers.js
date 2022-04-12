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

export const fileNotChanged = (formDataKey, keysValue) => {
  const imagesArray = [
    "image",
    "gost_image",
    "chertej_image",
    "gost_image[0]",
    "gost_image[1]",
    "chertej_image[0]",
    "chertej_image[1]",
    "image[1]",
    "image[2]",
  ];
  const idx = imagesArray.findIndex((img) => img === formDataKey);
  return idx > -1 && typeof keysValue === "string";
};

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
        const j = JSON.stringify(data[key]);
        formData.append(key, j);
      } else {
        formData.append(key, data[key]);
      }
      if (fileNotChanged(key, data[key])) {
        formData.delete(key);
      }
    }
  }

  return formData;
};

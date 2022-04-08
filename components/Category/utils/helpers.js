import { CategoryFormData } from "./constants";

// eslint-disable-next-line import/prefer-default-export
export const convertToFormData = (type, data) => {
  const formData = new FormData();

  if (!data) return null;

  if (type === "category") {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in CategoryFormData) {
      if (data[key]) formData.append(key, data[key]);
    }
  }

  return formData;
};

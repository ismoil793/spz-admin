import { CategoryFormData } from './constants';

export const convertToFormData = (type, data) => {
   const formData = new FormData();

   if (!data) return null;

   if (type === 'category') {
      for (const key in CategoryFormData) {
         formData.append(key, data[key]);
      }
   }

   return formData;
};
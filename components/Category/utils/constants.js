const formData = {
  title_uz: "",
  title_ru: "",
  title_en: "",
  description_uz: "",
  description_ru: "",
  description_en: "",
  meta_title_uz: "",
  meta_title_ru: "",
  meta_title_en: "",
  meta_description_uz: "",
  meta_description_ru: "",
  meta_description_en: "",
  meta_keyword_uz: "",
  meta_keyword_ru: "",
  meta_keyword_en: "",
};

export const CategoryFormData = {
  ...formData,
  image: "",
  imageUrl: "https://via.placeholder.com/500x400",
};

export const SubCategoryFormData = {
  ...formData,
  category_id: "",
  specs: "",
  image: "",
  "chertej_image[0]": "",
  "chertej_image[1]": "",
};

export const ProductFormData = {
  ...formData,
  sub_category_id: "",
  "image[1]": "",
  "image[2]": "",
  dynamic_features: "",
};

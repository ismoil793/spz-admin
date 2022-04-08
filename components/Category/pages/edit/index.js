import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ParentCategoryInfo from "../../reusables/ParentCategoryInfo";
import CategoryInfo from "../../reusables/CategoryInfo";
import MediaInfo from "../../reusables/MediaInfo";
import SeoInfo from "../../reusables/SeoInfo";

function CategoryEdit({
  isSubCategory = false,
  isProduct = false,
  // isCreate = false,
  formData,
  setFormData,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {isSubCategory && (
        <ParentCategoryInfo
          isSubCategory={isSubCategory}
          isProduct={isProduct}
        />
      )}
      {mounted && (
        <CategoryInfo formData={formData} setFormData={setFormData} />
      )}
      <MediaInfo formData={formData} setFormData={setFormData} />
      <SeoInfo formData={formData} setFormData={setFormData} />
    </>
  );
}

CategoryEdit.propTypes = {
  isSubCategory: PropTypes.bool,
  isProduct: PropTypes.bool,
  // isCreate: PropTypes.bool,
  formData: PropTypes.shape({}),
  setFormData: PropTypes.func,
};

export default CategoryEdit;

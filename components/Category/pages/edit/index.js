import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ParentCategoryInfo from "../../reusables/ParentCategoryInfo";
import CategoryInfo from "../../reusables/CategoryInfo";
import MediaInfo from "../../reusables/MediaInfo";
import SeoInfo from "../../reusables/SeoInfo";
import FeaturesInfo from "../../reusables/FeaturesInfo";

function CategoryEdit({
  isSubCategory = false,
  isProduct = false,
  isEdit = false,
  formData,
  setFormData,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultProps = {
    formData,
    setFormData,
    isSubCategory,
    isProduct,
    isEdit,
  };

  return (
    <>
      {(isSubCategory || isProduct) && <ParentCategoryInfo {...defaultProps} />}
      {mounted && <CategoryInfo {...defaultProps} />}
      <MediaInfo {...defaultProps} />
      {isSubCategory || isProduct ? <FeaturesInfo {...defaultProps} /> : null}

      <SeoInfo {...defaultProps} />
    </>
  );
}

CategoryEdit.propTypes = {
  isSubCategory: PropTypes.bool,
  isProduct: PropTypes.bool,
  isEdit: PropTypes.bool,
  formData: PropTypes.shape({}),
  setFormData: PropTypes.func,
};

CategoryEdit.defaultProps = {
  formData: {},
  setFormData: () => {},
};

export default CategoryEdit;

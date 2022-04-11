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
  };

  return (
    <>
      {(isSubCategory || isProduct) && (
        <ParentCategoryInfo
          formData={formData}
          setFormData={setFormData}
          isSubCategory={isSubCategory}
          isProduct={isProduct}
        />
      )}
      {mounted && (
        <CategoryInfo
          {...defaultProps}
          isProduct={isProduct}
          isSubCategory={isSubCategory}
        />
      )}
      <MediaInfo
        isSubCategory={isSubCategory}
        isProduct={isProduct}
        isEdit={isEdit}
        {...defaultProps}
      />
      {isSubCategory || isProduct ? (
        <FeaturesInfo
          isProduct={isProduct}
          isSubCategory={isSubCategory}
          formData={formData}
          setFormData={setFormData}
        />
      ) : null}

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

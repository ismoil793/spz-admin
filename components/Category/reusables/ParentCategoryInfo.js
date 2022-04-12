import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function ParentCategoryInfo({
  isSubCategory,
  // formData,
  setFormData,
  isProduct,
  isEdit,
}) {
  const { categories } = useSelector((state) => state.category);
  const { subCategories } = useSelector((state) => state.subCategory);
  const [labelValue, setLabelValue] = useState();

  const nameID = isProduct ? "sub_category_id" : "category_id";

  const getCategoryLabels = () => {
    const data = isProduct ? subCategories : categories;
    return (
      data?.length &&
      data.map((cat) => ({ label: cat.title_ru, value: cat.id }))
    );
  };
  const categoryLabels = getCategoryLabels() || [];

  const { query } = useRouter();

  useEffect(() => {
    if (query.parentID) {
      setFormData((prev) => ({
        ...prev,
        [nameID]: query.parentID,
      }));
    }
  }, [query]);

  const handleDropdownChange = (_, changeVal) => {
    setLabelValue(categoryLabels.find((c) => c.value === +changeVal.value));
    setFormData((prev) => ({
      ...prev,
      [nameID]: changeVal?.value || "",
    }));
  };

  const defaultLabel =
    categoryLabels.find((c) => c.value === +query.parentID) || null;

  return (
    <div className="row mb-5">
      <div className="col-lg-12">
        <h4 className="">
          {isSubCategory ? "Выбрать родительскую категорию" : ""}
        </h4>
      </div>
      <div className="col-lg-4">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={categoryLabels}
          onChange={handleDropdownChange}
          value={labelValue || defaultLabel}
          disabled={!isEdit}
          // sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={isProduct ? "Субкатегория" : "Категория"}
              required
            />
          )}
        />
      </div>
    </div>
  );
}

ParentCategoryInfo.propTypes = {
  formData: PropTypes.shape({}),
  isSubCategory: PropTypes.bool,
  isProduct: PropTypes.bool,
  isEdit: PropTypes.bool,
  setFormData: PropTypes.func,
};

export default ParentCategoryInfo;

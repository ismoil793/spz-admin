import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";
import { arr2obj } from "../utils/helpers";

function FeaturesInfo({ setFormData, isSubCategory }) {
  const [specsList, setSpecsList] = useState([["", ""]]);

  const handleSpecAdd = () => {
    setSpecsList((prev) => [...prev, ["", ""]]);
  };

  const handleSpecRemove = (idx) => {
    setSpecsList([...specsList.filter((_, i) => i !== idx)]);
  };

  const handleSpecsChange = (e, index, position) => {
    const newSpecsList = specsList;
    newSpecsList[index][position] = e.target.value;
    setSpecsList([...newSpecsList]);
  };

  const lastSpecElementBlur = () => {
    const stringifyObject = JSON.stringify(arr2obj(specsList));
    setFormData((prev) => ({
      ...prev,
      specs: stringifyObject,
    }));
  };

  const renderSpecs = () =>
    specsList.map((_, i, arr) => (
      <>
        <div className="col-lg-6 mb-3">
          <TextField
            key={i}
            className="category-seo-title"
            label={`Характерситика ${i + 1}`}
            variant="outlined"
            // value={formData.meta_title_ru}
            onChange={(e) => handleSpecsChange(e, i, 0)}
            required
          />
        </div>
        <div className="col-lg-5 mb-3">
          <TextField
            key={i}
            className="category-seo-title"
            label={`Значение ${i + 1}`}
            variant="outlined"
            // value={formData.meta_title_ru}
            onChange={(e) => handleSpecsChange(e, i, 1)}
            required
            onBlur={i === arr.length - 1 ? lastSpecElementBlur : () => {}}
          />
        </div>
        <div className="col-lg-1">
          <Button
            onClick={() => handleSpecRemove(i)}
            variant="contained"
            color="error"
            type="button"
          >
            Удалить
          </Button>
        </div>
      </>
    ));

  return (
    <div className="row mb-2">
      <div className="col-lg-12">
        <h4 className="">
          Характеристики {isSubCategory ? "подкатегории" : "товара"}
        </h4>
      </div>
      {renderSpecs()}
      <div className="col-lg-12 mt-3">
        <Button onClick={handleSpecAdd} variant="contained" type="button">
          Добавить
        </Button>
      </div>
    </div>
  );
}

FeaturesInfo.propTypes = {
  isSubCategory: PropTypes.bool,
  setFormData: PropTypes.func,
};

export default FeaturesInfo;

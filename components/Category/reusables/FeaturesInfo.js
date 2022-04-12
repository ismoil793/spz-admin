import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";
import { arr2obj } from "../utils/helpers";

function FeaturesInfo({
  formData,
  setFormData,
  isSubCategory,
  isProduct,
  isEdit,
}) {
  const [specsList, setSpecsList] = useState([["", ""]]);
  const [defaultUsed, setDefaultUsed] = useState(false);
  const specsName = isProduct ? "dynamic_features" : "specs";

  useEffect(() => {
    if (isEdit && !defaultUsed && typeof formData[specsName] === "string") {
      const parsed = JSON.parse(formData[specsName]);
      setSpecsList([...Object.entries(parsed)]);
      setDefaultUsed(true);
    }
  }, [formData]);

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
      [specsName]: stringifyObject,
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
            value={specsList[i][0]}
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
            value={specsList[i][1]}
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
  formData: PropTypes.shape({}),
  isSubCategory: PropTypes.bool,
  isProduct: PropTypes.bool,
  setFormData: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default FeaturesInfo;

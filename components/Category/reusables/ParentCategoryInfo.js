import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

function ParentCategoryInfo({ isSubCategory }) {
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
          options={top100Films}
          // defaultValue={{ label: 'The Shawshank Redemption', year: 1994 }}
          // sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Категория" required />
          )}
        />
      </div>
    </div>
  );
}

ParentCategoryInfo.propTypes = {
  isSubCategory: PropTypes.bool,
};

export default ParentCategoryInfo;

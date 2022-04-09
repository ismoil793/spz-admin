import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import TextEditor from "../../TextEditor";

function CategoryInfo({ formData, setFormData }) {
  const [descriptionRu, setDescriptionRu] = useState();
  const [descriptionUz, setDescriptionUz] = useState();
  const [descriptionEn, setDescriptionEn] = useState();

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      description_ru: descriptionRu,
    }));
  }, [descriptionRu]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      description_uz: descriptionUz,
    }));
  }, [descriptionUz]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      description_en: descriptionEn,
    }));
  }, [descriptionEn]);

  const handleTitleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <TextField
            className="category-title"
            label="Имя категории RU"
            variant="outlined"
            value={formData.title_ru}
            required
            name="title_ru"
            onChange={handleTitleChange}
          />
        </div>
        <div className="col-lg-4">
          <TextField
            className="category-title"
            label="Имя категории UZ"
            variant="outlined"
            value={formData.title_uz}
            required
            name="title_uz"
            onChange={handleTitleChange}
          />
        </div>
        <div className="col-lg-4">
          <TextField
            className="category-title"
            label="Имя категории EN"
            variant="outlined"
            value={formData.title_en}
            required
            name="title_en"
            onChange={handleTitleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4>
            Описание <span className="flag-bg ru">ru</span>
          </h4>
        </div>
        <div className="col-lg-12">
          <div className="text-editor-wrapper">
            <TextEditor setEditorHTML={setDescriptionRu} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h4>
            Описание <span className="flag-bg uz">uz</span>
          </h4>
        </div>
        <div className="col-6">
          <h4>
            Описание <span className="flag-bg en">en</span>
          </h4>
        </div>
        <div className="col-lg-6">
          <div className="text-editor-wrapper">
            <TextEditor setEditorHTML={setDescriptionUz} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-editor-wrapper">
            <TextEditor setEditorHTML={setDescriptionEn} />
          </div>
        </div>
      </div>
    </>
  );
}

CategoryInfo.propTypes = {
  formData: PropTypes.shape({
    title_ru: PropTypes.string,
    title_uz: PropTypes.string,
    title_en: PropTypes.string,
  }),
  setFormData: PropTypes.func,
};

export default CategoryInfo;

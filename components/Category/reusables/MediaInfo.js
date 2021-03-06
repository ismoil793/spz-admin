import React from "react";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import keys from "../../../api/constants";

const Input = styled("input")({
  display: "none",
});

function MediaInfo({
  formData = {},
  setFormData,
  isSubCategory,
  isProduct,
  // isEdit,
}) {
  const { imageUrl } = formData;

  const handleImageUpload = (e) => {
    const image = e.target?.files.length ? e.target?.files[0] : null;
    const imageUrl = URL.createObjectURL(image);

    setFormData((prev) => ({
      ...prev,
      imageUrl,
      image,
    }));
  };

  const handleSubCategoryMediaUpload = (e, name) => {
    const file = e.target?.files.length ? e.target.files[0] : null;

    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  const renderImageUploader = (name, btnLabel = "") => {
    let src = "https://via.placeholder.com/500x400";

    if (formData[name] && typeof formData[name] === "object") {
      src = URL.createObjectURL(formData[name]);
    } else if (typeof formData[name] === "string" && formData[name].length) {
      src = `${keys.BASE_URL}/${formData[name]}`;
    }

    return (
      <>
        <img className="image-upload multiple" src={src} alt="upload" />
        <div>
          <label htmlFor={name}>
            <Input
              accept="image/*"
              id={name}
              type="file"
              onChange={(e) => handleSubCategoryMediaUpload(e, name)}
            />
            Загрузить {btnLabel}
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
      </>
    );
  };

  return (
    <div className="row">
      {!isProduct && (
        <div className="col-lg-12">
          <h4>Фотограия (500x400)</h4>
        </div>
      )}
      {!isProduct && (
        <div className="col-lg-12">
          <img className="image-upload" src={imageUrl} alt="upload" />
          <div>
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleImageUpload}
              />
              Загрузить
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
        </div>
      )}
      {isSubCategory ? (
        <>
          <div className="col-lg-12">
            <h4>Чертежи</h4>
          </div>
          <div className="col-lg-6">
            {renderImageUploader("chertej_image[0]", "Чертёж 1")}
          </div>
          <div className="col-lg-6">
            {renderImageUploader("chertej_image[1]", "Чертёж 2")}
          </div>
          <div className="col-lg-12">
            <h4>Госты</h4>
          </div>
          <div className="col-lg-6">
            {renderImageUploader("gost_image[0]", "Гост 1")}
          </div>
          <div className="col-lg-6">
            {renderImageUploader("gost_image[1]", "Гост 2")}
          </div>
        </>
      ) : (
        isProduct && (
          <>
            <div className="col-lg-12">
              <h4>Фото карусели товара</h4>
            </div>
            <div className="col-lg-6">
              {renderImageUploader("image[0]", "Фото 1")}
            </div>
            <div className="col-lg-6">
              {renderImageUploader("image[1]", "Фото 2")}
            </div>
          </>
        )
      )}
    </div>
  );
}

MediaInfo.propTypes = {
  formData: PropTypes.shape({
    imageUrl: PropTypes.string,
  }),
  setFormData: PropTypes.func,
  isSubCategory: PropTypes.bool,
  isProduct: PropTypes.bool,
  // isEdit: PropTypes.bool,
};

export default MediaInfo;

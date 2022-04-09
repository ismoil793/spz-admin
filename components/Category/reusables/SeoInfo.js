import React from "react";
import { TextField } from "@mui/material";
// import { Switch, TextField } from "@mui/material";
import PropTypes from "prop-types";

function SeoInfo({ formData, setFormData }) {
  // const [isSeoEnabled, setSeoEnabled] = useState(true);

  // const handleSwitchSEO = () => {
  //   setSeoEnabled((prev) => !prev);
  // };

  const handleSeoDataChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h4>
            SEO оптимизация{" "}
            {/* <Switch checked={isSeoEnabled} onChange={handleSwitchSEO} /> */}
          </h4>
        </div>
      </div>

      {/* isSeoEnabled */}
      <div className="row">
        <div className="row mb-3">
          <div className="col-lg-4">
            <TextField
              className="category-seo-title"
              label="meta_title_ru"
              name="meta_title_ru"
              variant="outlined"
              value={formData.meta_title_ru}
              onChange={handleSeoDataChange}
              required
            />
          </div>
          <div className="col-lg-4">
            <TextField
              className="category-seo-title"
              label="meta_title_uz"
              name="meta_title_uz"
              variant="outlined"
              value={formData.meta_title_uz}
              onChange={handleSeoDataChange}
              required
            />
          </div>
          <div className="col-lg-4">
            <TextField
              className="category-seo-title"
              label="meta_title_en"
              name="meta_title_en"
              variant="outlined"
              value={formData.meta_title_en}
              onChange={handleSeoDataChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-4">
            <TextField
              className="category-seo-title"
              label="meta_description_ru"
              name="meta_description_ru"
              variant="outlined"
              value={formData.meta_description_ru}
              onChange={handleSeoDataChange}
              required
            />
          </div>
          <div className="col-lg-4">
            <TextField
              className="category-seo-title"
              label="meta_description_uz"
              name="meta_description_uz"
              variant="outlined"
              value={formData.meta_description_uz}
              onChange={handleSeoDataChange}
              required
            />
          </div>
          <div className="col-lg-4">
            <TextField
              className="category-seo-title"
              label="meta_description_en"
              name="meta_description_en"
              variant="outlined"
              value={formData.meta_description_en}
              onChange={handleSeoDataChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-4">
            <TextField
              className="category-seo-title"
              label="meta_keyword_ru"
              name="meta_keyword_ru"
              variant="outlined"
              value={formData.meta_keyword_ru}
              onChange={handleSeoDataChange}
              required
            />
          </div>
          <div className="col-lg-4">
            <TextField
              className="category-seo-title"
              label="meta_keyword_uz"
              name="meta_keyword_uz"
              variant="outlined"
              value={formData.meta_keyword_uz}
              onChange={handleSeoDataChange}
              required
            />
          </div>
          <div className="col-lg-4">
            <TextField
              className="category-seo-title"
              label="meta_keyword_en"
              name="meta_keyword_en"
              variant="outlined"
              value={formData.meta_keyword_en}
              onChange={handleSeoDataChange}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}

SeoInfo.propTypes = {
  formData: PropTypes.shape({
    meta_title_uz: PropTypes.string,
    meta_title_ru: PropTypes.string,
    meta_title_en: PropTypes.string,
    meta_description_uz: PropTypes.string,
    meta_description_ru: PropTypes.string,
    meta_description_en: PropTypes.string,
    meta_keyword_uz: PropTypes.string,
    meta_keyword_ru: PropTypes.string,
    meta_keyword_en: PropTypes.string,
  }),
  setFormData: PropTypes.func,
};

export default SeoInfo;

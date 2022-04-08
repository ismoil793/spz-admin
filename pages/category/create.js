import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import CategoryEdit from "../../components/Category/pages/edit";
import { CategoryFormData } from "../../components/Category/utils/constants";
import { convertToFormData } from "../../components/Category/utils/helpers";
import { createCategory } from "../../store/actions/category";

function CategoryCreatePage() {
  const [formData, setFormData] = useState(CategoryFormData);
  const dispatch = useDispatch();

  const onCategoryCreate = (e) => {
    e.preventDefault();
    const convertedData = convertToFormData("category", formData);
    dispatch(createCategory(convertedData));
  };

  return (
    <section className="category-page create default-section">
      <form onSubmit={onCategoryCreate}>
        <div className="top-head">
          <h2>Создать категорию</h2>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>
        </div>
        <div className="container-fluid p-0">
          <CategoryEdit formData={formData} setFormData={setFormData} />

          <div className="row">
            <div className="col-lg-12">
              <Button variant="contained" type="submit">
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default CategoryCreatePage;

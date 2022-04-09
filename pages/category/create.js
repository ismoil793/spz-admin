import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CategoryEdit from "../../components/Category/pages/edit";
import { CategoryFormData } from "../../components/Category/utils/constants";
import { convertToFormData } from "../../components/Category/utils/helpers";
import {
  clearCategory,
  createCategory,
  fetchAllCategories,
} from "../../store/actions/category";
import { notifySuccess } from "../../components/NotifyButton";

function CategoryCreatePage() {
  const [formData, setFormData] = useState(CategoryFormData);
  const { category } = useSelector((state) => state.category);
  const { push } = useRouter();
  const dispatch = useDispatch();

  const onCategoryCreate = (e) => {
    e.preventDefault();
    const convertedData = convertToFormData("category", formData);
    dispatch(createCategory(convertedData));
  };

  useEffect(
    () => () => {
      // on unmount
      dispatch(clearCategory());
    },
    []
  );

  useEffect(async () => {
    if (category.status) {
      await dispatch(fetchAllCategories());
      notifySuccess("Успешно создано");
      push("/");
    }
  }, [category]);

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

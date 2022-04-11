import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CategoryEdit from "../../components/Category/pages/edit";
import { SubCategoryFormData } from "../../components/Category/utils/constants";
import { convertToFormData } from "../../components/Category/utils/helpers";
import {
  createSubCategory,
  clearSubCategory,
  fetchSubCategory,
} from "../../store/actions/subCategory";
import { notifySuccess } from "../../components/NotifyButton";
import { fetchAllCategories } from "../../store/actions/category";

function SubCategoryCreatePage() {
  const [formData, setFormData] = useState(SubCategoryFormData);
  const { category } = useSelector((state) => state.category);
  const { subCategory } = useSelector((state) => state.subCategory);
  const { back, query } = useRouter();
  const dispatch = useDispatch();

  const onSubCategoryCreate = (e) => {
    e.preventDefault();
    const convertedData = convertToFormData("subCategory", formData);
    dispatch(createSubCategory(convertedData));
  };

  useEffect(() => {
    if (!category?.length) {
      dispatch(fetchAllCategories());
    }
    return () => {
      // unmount
      dispatch(clearSubCategory());
    };
  }, []);

  useEffect(async () => {
    if (subCategory.status) {
      fetchSubCategory(query.parentID);
      notifySuccess("Успешно создано");
      back();
    }
  }, [subCategory]);

  return (
    <section className="category-page default-section">
      <form onSubmit={onSubCategoryCreate}>
        <div className="top-head">
          <h2>Создать подкатегорию</h2>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>
        </div>
        <div className="container-fluid p-0">
          <CategoryEdit
            isSubCategory
            isCreate
            formData={formData}
            setFormData={setFormData}
          />

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

export default SubCategoryCreatePage;

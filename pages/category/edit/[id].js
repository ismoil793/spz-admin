import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CategoryEdit from "../../../components/Category/pages/edit";
import { CategoryFormData } from "../../../components/Category/utils/constants";
import keys from "../../../api/constants";
import { convertToFormData } from "../../../components/Category/utils/helpers";
import { updateCategory } from "../../../store/actions/category";

function CategoryPage() {
  const { query } = useRouter();
  const [formData, setFormData] = useState(CategoryFormData);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState({});

  const onCategoryEdit = (e) => {
    e.preventDefault();
    const convertedData = convertToFormData("category", formData);
    convertedData.append("_method", "PUT");
    dispatch(updateCategory(query.id, convertedData));
  };

  useEffect(() => {
    if (query?.id) {
      const candidate = categories.find((cat) => cat.id === +query.id);
      if (candidate?.id) {
        setFormData({
          ...CategoryFormData,
          ...candidate,
          imageUrl: `${keys.BASE_URL}/${candidate.image}`,
        });
        setCurrentCategory(candidate);
      }
    }
  }, [categories]);

  return (
    <section className="category-page default-section">
      <form onSubmit={onCategoryEdit}>
        <div className="top-head">
          <h2>{currentCategory.title_ru}</h2>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>
        </div>
        <div className="container-fluid p-0">
          <CategoryEdit formData={formData} setFormData={setFormData} isEdit />

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

export default CategoryPage;

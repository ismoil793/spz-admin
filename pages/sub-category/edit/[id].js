import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CategoryEdit from "../../../components/Category/pages/edit";
import { SubCategoryFormData } from "../../../components/Category/utils/constants";
import { convertToFormData } from "../../../components/Category/utils/helpers";
import {
  clearSubCategory,
  fetchSubCategory,
  updateSubCategory,
} from "../../../store/actions/subCategory";
import { notifySuccess } from "../../../components/NotifyButton";
import keys from "../../../api/constants";

function SubCategoryPage() {
  const { query, back } = useRouter();
  const [formData, setFormData] = useState(SubCategoryFormData);
  const { subCategories, subCategory } = useSelector(
    (state) => state.subCategory
  );
  const dispatch = useDispatch();
  const [currentSubCategory, setCurrentSubCategory] = useState({});

  const onSubCategoryEdit = (e) => {
    e.preventDefault();
    const convertedData = convertToFormData("subCategory", formData);
    convertedData.append("_method", "PUT");
    dispatch(updateSubCategory(query.id, convertedData));
  };

  useEffect(() => {
    if (query?.id) {
      const candidate = subCategories.find((cat) => cat.id === +query.id);
      if (candidate?.id) {
        const chertej_image = JSON.parse(candidate.chertej_image);
        const gost_image = JSON.parse(candidate.gost_image);
        setFormData({
          ...SubCategoryFormData,
          ...candidate,
          imageUrl: `${keys.BASE_URL}/${candidate.image}`,
          "chertej_image[0]": chertej_image[0]?.name || "",
          "chertej_image[1]": chertej_image[1]?.name || "",
          "gost_image[0]": gost_image[0]?.name || "",
          "gost_image[1]": gost_image[1]?.name || "",
        });
        setCurrentSubCategory(candidate);
      }
    }
  }, [subCategories]);

  useEffect(
    () => () => {
      // on unmount
      dispatch(clearSubCategory());
    },
    []
  );

  useEffect(async () => {
    if (subCategory.status) {
      await dispatch(fetchSubCategory(query.parentID));
      notifySuccess("Успешно обновлено");
      back();
    }
  }, [subCategory]);

  return (
    <section className="category-page default-section">
      <form onSubmit={onSubCategoryEdit}>
        <div className="top-head">
          <h2>Изменить подкатегорию "{currentSubCategory.title_ru}"</h2>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>
        </div>
        <div className="container-fluid p-0">
          <CategoryEdit
            formData={formData}
            setFormData={setFormData}
            isSubCategory
            isEdit
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

export default SubCategoryPage;

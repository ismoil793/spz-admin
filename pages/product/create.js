import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CategoryEdit from "../../components/Category/pages/edit";
import { ProductFormData } from "../../components/Category/utils/constants";
import { convertToFormData } from "../../components/Category/utils/helpers";
import { notifySuccess } from "../../components/NotifyButton";
import { clearProduct, createProduct } from "../../store/actions/product";
import { fetchSubCategory } from "../../store/actions/subCategory";

function ProductCreatePage() {
  const [formData, setFormData] = useState(ProductFormData);
  const { product } = useSelector((state) => state.product);
  const { subCategories } = useSelector((state) => state.subCategory);
  const { back, query } = useRouter();
  const dispatch = useDispatch();

  const onProductCreate = (e) => {
    e.preventDefault();
    const convertedData = convertToFormData("product", formData);
    dispatch(createProduct(convertedData));
  };

  useEffect(() => {
    if (!subCategories?.length) {
      dispatch(fetchSubCategory(query.categoryID));
    }
    return () => {
      // unmount
      dispatch(clearProduct());
    };
  }, [query]);

  useEffect(async () => {
    if (product.status) {
      notifySuccess("Успешно создано");
      back();
    }
  }, [product]);

  return (
    <section className="category-page default-section">
      <form onSubmit={onProductCreate}>
        <div className="top-head">
          <h2>Добавить товар</h2>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>
        </div>
        <div className="container-fluid p-0">
          <CategoryEdit
            isProduct
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

export default ProductCreatePage;

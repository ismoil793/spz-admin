import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CategoryEdit from "../../../components/Category/pages/edit";
import { ProductFormData } from "../../../components/Category/utils/constants";
import { convertToFormData } from "../../../components/Category/utils/helpers";
import { fetchSubCategory } from "../../../store/actions/subCategory";
import { notifySuccess } from "../../../components/NotifyButton";
import keys from "../../../api/constants";
import {
  clearProduct,
  fetchProducts,
  updateProduct,
} from "../../../store/actions/product";

function ProductEditPage() {
  const { query, back } = useRouter();
  const [formData, setFormData] = useState(ProductFormData);
  const { products, product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState({});

  const onSubCategoryEdit = (e) => {
    e.preventDefault();
    const convertedData = convertToFormData("subCategory", formData);
    convertedData.append("_method", "PUT");
    dispatch(updateProduct(query.id, convertedData));
  };

  useEffect(() => {
    if (query?.id) {
      const candidate = products.find((cat) => cat.id === +query.id);
      if (candidate?.id) {
        const image = JSON.parse(candidate.image);
        setFormData({
          ...ProductFormData,
          ...candidate,
          imageUrl: `${keys.BASE_URL}/${candidate.image}`,
          "image[0]": image[0]?.name || "",
          "image[1]": image[1]?.name || "",
        });
        setCurrentProduct(candidate);
      }
    }
  }, [products]);

  useEffect(async () => {
    if (product.status) {
      notifySuccess("Успешно обновлено");
      back();
    }
  }, [product]);

  useEffect(() => {
    if (!products?.length && query.parentID && query.categoryID) {
      dispatch(fetchProducts(query.parentID));
      dispatch(fetchSubCategory(query.categoryID));
    }
    return () => {
      // on unmount
      dispatch(clearProduct());
    };
  }, [query]);

  return (
    <section className="category-page default-section">
      <form onSubmit={onSubCategoryEdit}>
        <div className="top-head">
          <h2>Изменить Товар "{currentProduct?.title_ru}"</h2>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>
        </div>
        <div className="container-fluid p-0">
          <CategoryEdit
            formData={formData}
            setFormData={setFormData}
            isProduct
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

export default ProductEditPage;

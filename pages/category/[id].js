import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CategoryMainPage from "../../components/Category/pages/main";
import {
  deleteSubCategory,
  fetchSubCategory,
} from "../../store/actions/subCategory";

function CategoryPage() {
  const dispatch = useDispatch();
  const { subCategories } = useSelector((state) => state.subCategory);
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) dispatch(fetchSubCategory(query.id));
  }, [query]);

  const handleDeleteCategory = async (id) => {
    await dispatch(deleteSubCategory(id));
    await dispatch(fetchSubCategory(query.id));
  };

  return (
    <CategoryMainPage
      parentID={query.id}
      data={subCategories}
      handleDelete={handleDeleteCategory}
      isSubCategory
    />
  );
}

export default CategoryPage;

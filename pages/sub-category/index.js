import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import CategoryMainPage from "../../components/Category/pages/main";
import // deleteSubCategory,
// fetchAllSubCategories,
"../../store/actions/subCategory";

function SubCategoryPage() {
  // const dispatch = useDispatch();
  // const { subCategories } = useSelector((state) => state.subCategory);

  useEffect(() => {
    // if (!subCategories?.length) dispatch(fetchAllSubCategories());
  }, []);

  // const handleDeleteSubCategory = async (id) => {
  // await dispatch(deleteSubCategory(id));
  // await dispatch(fetchAllSubCategories());
  // };

  return (
    <CategoryMainPage
      isSubCategory
      // handleDelete={handleDeleteSubCategory}
    />
  );
}

export default SubCategoryPage;

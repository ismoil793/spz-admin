import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CategoryMainPage from "../components/Category/pages/main";
import { deleteCategory, fetchAllCategories } from "../store/actions/category";

export default function Index() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    if (!categories?.length) dispatch(fetchAllCategories());
  }, []);

  const handleDelete = async (id) => {
    await dispatch(deleteCategory(id));
    await dispatch(fetchAllCategories());
  };

  return <CategoryMainPage data={categories} handleDelete={handleDelete} />;
}

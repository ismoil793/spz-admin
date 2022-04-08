import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import CategoryEdit from "../../components/Category/pages/edit";

function CategoryPage() {
  const { query } = useRouter();

  const onCategoryEdit = (e) => {
    e.preventDefault();
    console.log("onCategoryEdit");
  };

  return (
    <section className="category-page default-section">
      <form onSubmit={onCategoryEdit}>
        <div className="top-head">
          <h2>Имя категории {query?.id}</h2>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>
        </div>
        <div className="container-fluid p-0">
          <CategoryEdit />

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

import React from "react";
import { Button } from "@mui/material";
import CategoryEdit from "../../components/Category/pages/edit";

function SubCategoryCreatePage() {
  return (
    <section className="category-page default-section">
      <div className="top-head">
        <h2>Создать подкатегорию</h2>
        <Button variant="contained">Сохранить</Button>
      </div>
      <div className="container-fluid p-0">
        <CategoryEdit isSubCategory isCreate />

        <div className="row">
          <div className="col-lg-12">
            <Button variant="contained">Сохранить</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubCategoryCreatePage;

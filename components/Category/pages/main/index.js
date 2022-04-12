import React, { useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import PropTypes from "prop-types";
import moment from "moment";
import ChoiceModal from "../../../Modal/ChoiceModal";
import keys from "../../../../api/constants";
import ProductsModal from "../../../Modal/ProductsModal";

function CategoryMainPage({ isSubCategory, data, handleDelete, parentID }) {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isProductsModalOpen, setProductsModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const path = isSubCategory ? "/sub-category/edit" : "/category/edit";

  const toggleDeleteModal = (id) => {
    if (isDeleteModalOpen) {
      setActiveCategoryId(null);
    } else {
      setActiveCategoryId(id);
    }
    setDeleteModalOpen((prev) => !prev);
  };

  const toggleProductsModal = (id) => {
    if (isProductsModalOpen) {
      setActiveCategoryId(null);
    } else {
      setActiveCategoryId(id);
    }
    setProductsModalOpen((prev) => !prev);
  };

  const deleteCallback = () => {
    handleDelete(activeCategoryId);
  };

  const renderCategories = () =>
    data?.length ? (
      data.map((cat) => (
        <TableRow key={cat.id}>
          <TableCell>{cat.id}</TableCell>
          <TableCell>
            <img
              className="cell-img"
              src={`${keys.BASE_URL}/${cat.image}`}
              alt="Placeholder of category"
            />
          </TableCell>
          <TableCell>
            <span className="fw-500">{cat.title_ru}</span>
          </TableCell>
          <TableCell>
            <span className="fw-500">{cat.title_uz}</span>
          </TableCell>
          <TableCell>
            <span className="fw-500">{cat.title_en}</span>
          </TableCell>
          <TableCell>
            {moment(cat.created_at).format("DD.MM.YYYY, h:mm")}
          </TableCell>
          {isSubCategory && (
            <TableCell>
              <Button
                className="cell-show-products"
                variant="outlined"
                color="secondary"
                onClick={() => toggleProductsModal(cat.id)}
              >
                Показать товары
              </Button>
            </TableCell>
          )}
          <TableCell className="actions-cell">
            {isSubCategory && (
              <Link
                href={`/product/create?parentID=${cat.id}&categoryID=${parentID}`}
              >
                <a>
                  <Tooltip title="Добавить товар">
                    <IconButton variant="contained" color="primary">
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </a>
              </Link>
            )}

            <Link
              href={{
                pathname: `${path}/[id]`,
                query: { id: cat.id, parentID },
              }}
              as={`${path}/${cat.id}${
                isSubCategory ? `?parentID=${parentID}` : ""
              }`}
            >
              <a>
                <Tooltip title="Просмотр/Изменить">
                  <IconButton variant="contained" color="secondary">
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </Link>
            <Tooltip title="Удалить">
              <IconButton
                onClick={() => toggleDeleteModal(cat.id)}
                variant="contained"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      ))
    ) : (
      <div>
        <h3>Пусто</h3>
      </div>
    );

  return (
    <section className="category-main default-section">
      <div className="top-head">
        <h2>Список {isSubCategory ? "Подкатегорий" : "Категорий"}</h2>
        <Link
          href={
            isSubCategory
              ? `/sub-category/create?parentID=${parentID}`
              : "/category/create"
          }
        >
          <a>
            <Button variant="contained">
              <AddIcon /> Новая {isSubCategory && "под"}категория
            </Button>
          </a>
        </Link>
      </div>

      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="spz-table">
              <TableContainer component={Paper} className="clinet-table">
                <Table className="category-table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Фото</TableCell>
                      <TableCell>
                        Название <span className="flag-bg ru">ru</span>
                      </TableCell>
                      <TableCell>
                        Название <span className="flag-bg uz">uz</span>
                      </TableCell>
                      <TableCell>
                        Название <span className="flag-bg en">en</span>
                      </TableCell>
                      <TableCell>Дата создания</TableCell>
                      {isSubCategory && <TableCell>Товары</TableCell>}
                      <TableCell>Действие</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{renderCategories()}</TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>

      <ChoiceModal
        open={isDeleteModalOpen}
        onClose={toggleDeleteModal}
        callback={deleteCallback}
      />

      <ProductsModal
        activeCategoryId={activeCategoryId}
        open={isProductsModalOpen}
        onClose={toggleProductsModal}
      />
    </section>
  );
}

CategoryMainPage.propTypes = {
  isSubCategory: PropTypes.bool,
  parentID: PropTypes.bool,
  data: PropTypes.shape([]),
  handleDelete: PropTypes.func,
};

CategoryMainPage.defaultProps = {
  isSubCategory: false,
};

export default CategoryMainPage;

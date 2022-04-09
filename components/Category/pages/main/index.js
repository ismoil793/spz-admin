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

function CategoryMainPage({ isSubCategory, data, handleDelete }) {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const path = isSubCategory ? "/sub-category" : "/category";

  const toggleDeleteModal = (id) => {
    if (isDeleteModalOpen) {
      setActiveCategoryId(null);
    } else {
      setActiveCategoryId(id);
    }
    setDeleteModalOpen((prev) => !prev);
  };

  const deleteCallback = () => {
    handleDelete(activeCategoryId);
  };

  const renderCategories = () =>
    data?.length &&
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
          <br />
          <div className="cell-desc">{cat.description_ru}</div>
        </TableCell>
        <TableCell>
          <span className="fw-500">{cat.title_uz}</span>
          <br />
          <div className="cell-desc">{cat.description_uz}</div>
        </TableCell>
        <TableCell>
          <span className="fw-500">{cat.title_en}</span>
          <br />
          <div className="cell-desc">{cat.description_en}</div>
        </TableCell>
        <TableCell>
          {moment(cat.created_at).format("DD.MM.YYYY, h:mm")}
        </TableCell>
        <TableCell className="actions-cell">
          {/* <Link href='/'> */}
          {/*   <a> */}
          {/*      <Tooltip title='Добавить подкатегоию'> */}
          {/*         <IconButton variant='contained' color='primary'><AddIcon /></IconButton> */}
          {/*      </Tooltip> */}
          {/*   </a> */}
          {/* </Link> */}

          <Link
            href={{
              pathname: `${path}/[id]`,
              query: { id: cat.id },
            }}
            as={`${path}/${cat.id}`}
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
    ));

  return (
    <section className="category-main default-section">
      <div className="top-head">
        <h2>Список {isSubCategory ? "Подкатегорий" : "Категорий"}</h2>
        <Link href={`${path}/create`}>
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
                        Название/Описание <span className="flag-bg ru">ru</span>
                      </TableCell>
                      <TableCell>
                        Название/Описание <span className="flag-bg uz">uz</span>
                      </TableCell>
                      <TableCell>
                        Название/Описание <span className="flag-bg en">en</span>
                      </TableCell>
                      <TableCell>Дата создания</TableCell>
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
    </section>
  );
}

CategoryMainPage.propTypes = {
  isSubCategory: PropTypes.bool,
  data: PropTypes.shape([]),
  handleDelete: PropTypes.func,
};

CategoryMainPage.defaultProps = {
  isSubCategory: false,
};

export default CategoryMainPage;

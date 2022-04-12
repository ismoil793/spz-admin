import React from "react";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Tooltip,
  IconButton,
} from "@mui/material";
import moment from "moment";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import keys from "../../../api/constants";
import { deleteProduct } from "../../../store/actions/product";

function ProductsTable({ activeSubCategoryId }) {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { query } = useRouter();

  const handleProductDelete = async (id) => {
    await dispatch(deleteProduct(id));
  };

  const renderProducts = () =>
    products?.length ? (
      products.map((product) => (
        <TableRow key={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell>
            <img
              className="cell-img"
              src={`${keys.BASE_URL}/${JSON.parse(product.image)[0].name}`}
              alt="Placeholder of category"
            />
          </TableCell>
          <TableCell>
            <span className="fw-500">{product.title_ru}</span>
          </TableCell>
          <TableCell>
            <span className="fw-500">{product.title_uz}</span>
          </TableCell>
          <TableCell>
            <span className="fw-500">{product.title_en}</span>
          </TableCell>
          <TableCell>
            {moment(product.created_at).format("DD.MM.YYYY, h:mm")}
          </TableCell>
          <TableCell className="actions-cell">
            <Link
              href={{
                pathname: `/product/edit/[id]`,
                query: {
                  id: product.id,
                  parentID: activeSubCategoryId,
                  categoryID: query.id,
                },
              }}
              as={`/product/edit/${product.id}?parentID=${activeSubCategoryId}&categoryID=${query.id}`}
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
                onClick={() => handleProductDelete(product.id)}
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
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-lg-12">
          <TableContainer component={Paper} className="clinet-table">
            <Table className="category-table products">
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
                  <TableCell>Действие</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderProducts()}</TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

ProductsTable.propTypes = {
  activeSubCategoryId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default ProductsTable;

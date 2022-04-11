import React, { useEffect, useMemo } from "react";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import ProductsTable from "./ProductsTable";
import { fetchProducts } from "../../../store/actions/product";

function ProductsModal({ open, onClose, activeCategoryId }) {
  const dispatch = useDispatch();
  const { subCategories } = useSelector((state) => state.subCategory);

  useEffect(() => {
    if (activeCategoryId) dispatch(fetchProducts(activeCategoryId));
  }, [activeCategoryId]);

  const currentSubCategory = useMemo(() => {
    if (subCategories?.length && activeCategoryId) {
      return subCategories.find((sc) => sc.id === activeCategoryId);
    }
    return {};
  }, [subCategories, activeCategoryId]);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-choice"
        aria-describedby="modal-modal-choose"
      >
        <div className="products-modal">
          <div className="top-head">
            <h3>Товары в подкатегории "{currentSubCategory.title_ru}"</h3>
            <Link href={`/product/create?parentID=${activeCategoryId}`}>
              <a>
                <Button variant="contained">
                  <AddIcon /> Добавить товар
                </Button>
              </a>
            </Link>
          </div>
          <ProductsTable />
        </div>
      </Modal>
    </div>
  );
}

ProductsModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  activeCategoryId: PropTypes.number,
};

export default ProductsModal;

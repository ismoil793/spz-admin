import React, { useEffect, useState } from 'react';
import ParentCategoryInfo from '../../reusables/ParentCategoryInfo';
import CategoryInfo from '../../reusables/CategoryInfo';
import MediaInfo from '../../reusables/MediaInfo';
import SeoInfo from '../../reusables/SeoInfo';

const CategoryEdit = ({ isSubCategory = false, isProduct = false, isCreate = false, formData, setFormData }) => {

   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <>
         {
            isSubCategory &&
            <ParentCategoryInfo
               isSubCategory={isSubCategory}
               isProduct={isProduct}
            />
         }
         {
            mounted &&
            <CategoryInfo formData={formData} setFormData={setFormData} />
         }
         <MediaInfo formData={formData} setFormData={setFormData} />
         <SeoInfo formData={formData} setFormData={setFormData} />
      </>
   );
};

export default CategoryEdit;
import {  createProduct, productRender } from "./products.js";
import {
  addRecordQuantity,
  createRecord,
  deleteRecord,
  subRecordQuantity,
  updateRecord,
  updateRecordTotal,
} from "./record.js";
import { createForm, inventorySheet, newProductCreateForm, productSelect, recordTotal, rowGroup } from "./selectors.js";
import { products } from "./variables.js";

export const createFormHandler = (e) => {
  e.preventDefault();

  //   console.log("U submit");
  //   console.log(productSelect.value);
  //   console.log(inputQuantity.valueAsNumber);

  //data
  const formData = new FormData(createForm);
  const currentProductId = parseInt(formData.get("productSelect"));
  const currentProduct = products.find((el) => el.id === currentProductId);
  const currentQuantity = parseInt(formData.get("inputQuantity"));

  // console.log(currentProduct);

  //is exited row
  const isExistedRow = rowGroup.querySelector(
    `[row-product-id="${currentProductId}"]`
  );
  if (isExistedRow) {
    // const currentQuantityElement = isExistedRow.querySelector(".row-quantity");
    // const currentCost = isExistedRow.querySelector(".row-cost");
    // const currentPrice = isExistedRow.querySelector(".row-product-price");
    // currentQuantityElement.innerText =
    //   parseInt(currentQuantityElement.innerText) + currentQuantity;
    // currentCost.innerText =
    //   currentQuantityElement.innerText * currentPrice.innerText;
    updateRecord(isExistedRow.getAttribute("row-product-id"),currentQuantity)
  } else {
    //append row to table
    rowGroup.append(createRecord(currentProduct, currentQuantity));
  }
  //calculate total

  // updateRecordTotal();
  createForm.reset();
};

export const rowGroupHandler = (event) => {
  if (event.target.classList.contains("row-del-btn")) {
    console.log("U del now");
    deleteRecord(event);
  } else if (event.target.classList.contains("row-q-add")) {
    updateRecord(event.target.closest(".row").getAttribute("row-product-id"),1)
  } else if (event.target.classList.contains("row-q-sub")) {
    updateRecord(event.target.closest(".row").getAttribute("row-product-id"),-1)
  }
};

export const manageInventoryBtnHandler = () => {
  inventorySheet.classList.toggle("-translate-x-full");
};

// export const productFormHandler = (event) => {
//   event.preventDefault();
//   const formData = new FormData(productForm);
//   // productForm.querySelector(".newItem").setAttribute("productForm-id",products({id}));

//   const newProduct = formData.get("textInput");
//   const newProductPrice = parseFloat(formData.get("numberInput"));
//   //  const id = productForm.querySelector(".newItem").setAttribute("productForm-id",id);
//   //  productGroup.append(addNewProduct({newProduct, newProductPrice}));

//   //product length = 4 so product [4-1] = product[3].id
//   let ID = products[products.length - 1].id + 1;

//   products.push({
//     id: ID,
//     name: newProduct,
//     price: newProductPrice,
//   });

//   //  products.filter(product => product.id === ID);

//   // console.log(filter);
//   productRender(products.filter((product) => product.id === ID));

//   //  productRender(productData);
//   //  productSelect.append(addNewProduct({newProduct,id, newProductPrice}));

//   productForm.reset();
//   //  const productData = productTemplate.content.cloneNode(true);
//   //  productData.querySelector(".product-name").innerText=newProduct;
//   //  productData.querySelector(".product-price").innerText=newProductPrice;
//   //  return productData;
// };

export const newProductCreateFormHandler = (event) => {
 event.preventDefault();
const formData = new FormData(newProductCreateForm);
const newProduct =  {
  id: Date.now(),
  name: formData.get("new_product_name"),
  price: formData.get("new_product_price"),
}
// productGroup.append(createProduct(newProduct));
// productSelect.append(new Option (newProduct.name,newProduct.id))
products.push(newProduct);
productRender(products);
newProductCreateForm.reset();
};

export const printBtnHandler = () => {
 window.print();
}





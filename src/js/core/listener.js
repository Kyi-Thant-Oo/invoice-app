import { createFormHandler, manageInventoryBtnHandler, newProductCreateFormHandler,  printBtnHandler,  rowGroupHandler } from "./handlers.js";
import { createForm, rowGroup } from "./selectors.js";

const listener =() => {
    createForm.addEventListener("submit",createFormHandler);
    rowGroup.addEventListener("click",rowGroupHandler);
    manageInventoryBtn.addEventListener("click",manageInventoryBtnHandler);
    inventorySheetCloseBtn.addEventListener("click",manageInventoryBtnHandler);
    // productForm.addEventListener("submit",productFormHandler)
    newProductCreateForm.addEventListener("submit",newProductCreateFormHandler);
    printBtn.addEventListener("click",printBtnHandler)
   
}

export default listener;


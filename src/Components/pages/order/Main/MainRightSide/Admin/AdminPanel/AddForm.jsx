import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import Form from "./Form";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import SubmitButton from "./SubmitButton";

export default function AddForm() {
  // state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage(4000);
  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // affichage
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}

import { useOrderContext } from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../constants/product";
import Form from "./Form";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths";
import SubmitButton from "./SubmitButton";
import { useParams } from "react-router-dom";

export default function AddForm() {
  // state
  const { username } = useParams();
  const { handleAdd, newProduct, setNewProduct } = useOrderContext();
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };
    handleAdd(newProductToAdd, username);
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

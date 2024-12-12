import { useState } from "react";
import { useOrderContext } from "../../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import SavingMessage from "../../Menu/SavingMessage";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import { useParams } from "react-router-dom";

export default function EditForm() {
  // state
  const { username } = useParams();
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useOrderContext();

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

  // comportements (gestionnaires d'événement ou "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated); // cette ligne update le formulaire
    handleEdit(productBeingUpdated, username); // cette ligne update le menu
  };

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value;
    setValueOnFocus(valueOnFocus);
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage();
    }
  };
  // affichage
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  );
}

import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
// state
const { inputValue } = useParams()
// comportements

//render
  return (
    <div>
      <h1>Bonjour { inputValue } </h1>
        <Link to="/">
          <button>
            Se deconnecter
          </button>
        </Link>
    </div>
  )
}

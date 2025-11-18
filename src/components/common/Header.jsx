
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  function handleroute(page) {
    navigate(page)
  }

  return (
    <div>
      <button onClick={() => {handleroute('about')}}>about</button>
      <button onClick={() => {handleroute('contact')}}> contact</button>
    </div>
  )
}

export default Header
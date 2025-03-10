import { Link } from "react-router";
import logo_img from "../../assets/falcon.png";
import BurgerMenu from "./BurgerMenu";

function Logo() {
  return (
    <div className="flex items-center justify-between">
      <BurgerMenu />
      <Link to="/" className="flex items-center gap-2 w-fit">
        <img width="50px" height="50px" src={logo_img} alt="falcon logo" />
        <span className="text-3xl text-[#2C7BE5] font-bold">falcon</span>
      </Link>
    </div>
  );
}

export default Logo;

import style from "./Logo.module.css";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link to="/" className={`${style.logo__title} transition`}>
      <h1>Where in the world?</h1>
    </Link>
  );
};

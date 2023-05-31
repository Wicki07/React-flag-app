import { Logo } from "./components/Logo/Logo";
import { ThemeSelect } from "./components/ThemeSelect/ThemeSelect";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={`${style.header} transition`}>
      <Logo />
      <ThemeSelect />
    </div>
  );
};

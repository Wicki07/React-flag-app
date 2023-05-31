import { useState } from "react";
import style from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  icon?: IconProp;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={`${style["input-wrapper"]} ${
        isFocused ? style["input-wrapper__focused"] : ""
      }`}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      <input
        className={`${style["input"]} ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

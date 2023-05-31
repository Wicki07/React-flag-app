import { useState, useEffect, useRef } from "react";
import style from "./Select.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder,
  className,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selected, setSelected] = useState({} as Option);
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const selectedOption = options.find((option) => option.value === value);
      if (selectedOption) {
        setSelected(selectedOption);
      }
    }
  }, []);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
        setShowOptions(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleFocuse = () => {
    setIsFocused((prev) => !prev);
    setShowOptions((prev) => !prev);
  };

  const handleSelectChange = (option: Option) => {
    setSelected(option);
    onChange?.(option.value);
  };

  return (
    <div
      ref={selectRef}
      className={`${style["select-wrapper"]} ${className} ${
        isFocused ? style["select-wrapper__focused"] : ""
      }`}
      onClick={handleFocuse}
    >
      <div className={style.select}>
        {placeholder && !selected.label && (
          <span className={style.placeholder}>{placeholder}</span>
        )}
        {selected.label && (
          <span className={style.value}>{selected.label}</span>
        )}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {showOptions && (
        <div className={style.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={style.option}
              onClick={() => handleSelectChange(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

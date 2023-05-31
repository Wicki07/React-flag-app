import style from "./CountryList.module.css";
import { Country } from "@/types";
import { CountryCard } from "../CountryCard/CountryCard";

interface CountryListProps {
  countries: Country[];
}

export const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <div className={style["country-list"]}>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
};

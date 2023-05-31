import style from "./CountryCard.module.css";
import { Country } from "@/types";

interface CountryCardProps {
  country: Country;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className={style["country-card"]}>
      <img
        className={style["country-card__image"]}
        src={country.flag}
        alt={country.name}
      />
      <div className={style["country-card__info"]}>
        <h3 className={style["country__title"]}>{country.name}</h3>
        <span className={style["country__info"]}>
          <span className={style["country__info-title"]}>Population: </span>
          {country.population}
        </span>
        <span className={style["country__info"]}>
          <span className={style["country__info-title"]}>Region: </span>
          {country.region}
        </span>
        <span className={style["country__info"]}>
          <span className={style["country__info-title"]}>Capital: </span>
          {country.capital}
        </span>
      </div>
    </div>
  );
};

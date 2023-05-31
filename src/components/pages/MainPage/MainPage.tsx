import { useState, useEffect } from "react";
import { getAllCountries as getAllCountriesFromApi } from "@/services/countriesApi";
import { Country } from "@/types";
import { CountryList } from "./components/CountryList/CountryList";
import style from "./MainPage.module.css";
import { Input } from "@/components/common/Input/Input";
import { Select } from "@/components/common/Select/Select";
import { Loader } from "@/components/common/Loader/Loader";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const MainPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    const getAllCountries = async () => {
      setIsLoading(true);
      await getAllCountriesFromApi()
        .then((countries) => {
          setCountries(countries);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    getAllCountries();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleRegionSelect = (value: string) => {
    setRegion(value);
  };

  useEffect(() => {
    const _filteredCountries = countries.filter((country) => {
      if (region === "all" || region === "")
        return country.name.toLowerCase().includes(search.toLowerCase());
      return (
        country.name.toLowerCase().includes(search.toLowerCase()) &&
        country.region.toLowerCase() === region
      );
    });
    setFilteredCountries(_filteredCountries);
  }, [search, region, countries]);

  return (
    <div className={style.mainPage}>
      <div className={style.mainPage__header}>
        <Input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={handleSearch}
          icon={faSearch}
        />
        <Select
          options={[
            { value: "all", label: "All" },
            { value: "europe", label: "Europe" },
            { value: "asia", label: "Asia" },
            { value: "africa", label: "Africa" },
            { value: "americas", label: "Americas" },
            { value: "oceania", label: "Oceania" },
          ]}
          placeholder="Filter by Region"
          value={region}
          onChange={handleRegionSelect}
          className={style["region-select"]}
        />
      </div>
      {isLoading ? <Loader /> : <CountryList countries={filteredCountries} />}
    </div>
  );
};

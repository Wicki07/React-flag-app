import { Country } from "@/types";

const BASE_URL = "https://restcountries.com/v2";

export const getAllCountries = async (): Promise<Country[]> => {
  const response = await fetch(
    `${BASE_URL}/all?fields=name,capital,flag,population,region`
  );
  const countries = await response.json();
  return countries;
};

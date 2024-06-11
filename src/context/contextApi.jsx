import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const ApiContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [categories, setCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchCategoryData(categories);
  }, [categories]);

  const fetchCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then((res) => {
      console.log(res);
      searchResults(res);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        categories,
        setCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

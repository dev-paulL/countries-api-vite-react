import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchAllCountries = () => {
  const [error, setError] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get("./data.json");
      const data = response.data;
      setAllCountries(data);
    } catch (error) {
      console.log("Error fetching countries", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchAllCountries();
  }, []);

  return { error, allCountries, loading };
};

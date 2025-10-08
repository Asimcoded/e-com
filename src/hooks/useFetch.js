import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(endpoint) {
    const baseUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response  =await axios.get(baseUrl+endpoint);
        setData(response.data);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
},[endpoint])

return {data, loading, error}
}

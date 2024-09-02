import {useEffect, useState} from "react";

export const useApi = () => {
  const [current, setCurrent] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_KEY}&q=Czestochowa`)
      .then(res => res.json())
      .then(res => setCurrent(res));
  }, []);

  return current;
}
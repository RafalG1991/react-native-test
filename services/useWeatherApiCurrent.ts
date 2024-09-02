import {useEffect, useState} from "react";

export const useWeatherApiCurrent = () => {
  const [current, setCurrent] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_KEY}&q=Częstochowa&lang=PL`)
      .then(res => res.json())
      .then(res => setCurrent(res));
  }, []);

  return current;
}
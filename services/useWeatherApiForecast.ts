import {useEffect, useState} from "react";

export const useWeatherApiForecast = () => {
  const [forecast, setForecast] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/forecast.json?key=${process.env.EXPO_PUBLIC_KEY}&q=Częstochowa&days=7&lang=PL`)
      .then(res => res.json())
      .then(res => setForecast(res));
  }, []);

  return forecast;
}
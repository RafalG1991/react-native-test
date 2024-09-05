import {useEffect, useState} from "react";
import {FollowingWeatherType} from "../src/utils/types";

export const useWeatherApiForecast = (location: string) => {
  const [forecast, setForecast] = useState<FollowingWeatherType[] | null>(null);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/forecast.json?key=${process.env.EXPO_PUBLIC_KEY}&q=${location}&days=7&lang=PL`)
      .then(res => res.json())
      .then(res => setForecast(res.forecast.forecastday));
  }, []);

  return forecast;
}
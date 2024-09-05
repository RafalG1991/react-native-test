import {useEffect, useState} from "react";
import {ApiError, CurrentWeatherType} from "../src/utils/types";

export const useWeatherApiCurrent = (location: string) => {
  const [current, setCurrent] = useState<CurrentWeatherType | null | ApiError >(null);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_KEY}&q=${location}&lang=PL`)
      .then(res => res.json())
      .then(res => setCurrent(res));
  }, []);

  return current;
}
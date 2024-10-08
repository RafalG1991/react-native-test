export type FollowingWeatherType = {
  date: string,
  day: {
    avgtemp_c: number,
    condition: {
      icon: string,
      text: string,
    }
  },
  hour: {
    chance_of_rain: number,
    condition: {
      icon: string,
      text: string,
    },
    temp_c: number,
    wind_kph: number,
    time: string,
  }[],
};

export type CurrentWeatherType = {
  location: {
    name: string,
  },
  current: {
    temp_c: number,
    condition: {
      icon: string,
      text: string,
    }
  }
};

export interface ApiError {
  error: {
    code: number;
    message: string;
  };
}
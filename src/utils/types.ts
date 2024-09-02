export type FollowingWeatherType = {
  date: string,
  day: {
    avgtemp_c: number,
    condition: {
      icon: string,
      text: string,
    }
  },
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
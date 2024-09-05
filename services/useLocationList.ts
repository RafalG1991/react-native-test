import {useEffect, useState} from "react";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";

interface ListItem {
  title: string,
  value: string,
}

export const useLocationList = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const {getItem, setItem} = useAsyncStorage('locationList');

  useEffect(() => {
    const init = async () => {
      const storageItems = await getItem();
      if(storageItems) {
        setList(JSON.parse(storageItems));
      }
    }

    init();
  }, []);

  const addToList = (item: ListItem) => {
    setList(prevState => [...prevState, item]);
    setItem(JSON.stringify([...list, item]));
  };

  return {
    list,
    addToList,
  }
}
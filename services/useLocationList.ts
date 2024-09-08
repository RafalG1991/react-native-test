import {useEffect, useState} from "react";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

export interface ListItem {
  id: string,
  title: string,
  value: string,
}

export const useLocationList = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const {getItem, setItem, removeItem} = useAsyncStorage('locationList');

  useEffect(() => {
    const init = async () => {
      const storageItems = await getItem();
      if(storageItems) {
        setList(JSON.parse(storageItems));
      }
    }

    init();
  }, []);

  const addToList = (item: Omit<ListItem, 'id'>) => {
    setList(prevState => [...prevState, {...item, id: uuid()}]);
    setItem(JSON.stringify([...list, item]));
  };

  const removeFromList = (item: ListItem) => {
    const newList = [...list].filter(el => item.id !== el.id);
    setList(newList);
    setItem(JSON.stringify(newList));
  }

  return {
    list,
    addToList,
    removeFromList,
  }
}
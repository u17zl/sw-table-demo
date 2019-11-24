import Axios from "axios";
import stripHttps from "./stripHttps";

export default async function fetchFilms(list: string[]) {
  let name_list: string[] = [];
  let fetch_list: any[] = [];

  for (let i = 0; i < list.length; i++) {
    fetch_list.push(Axios.get(stripHttps(list[i])));
  }

  await Axios.all(fetch_list).then(res => {
    res.map((item: any) => {
      name_list.push(item.data.title);
    });
  });
  return name_list;
}

import Axios from "axios";
export default function fetchFilms(list: string[]) {
  let name_list: string[] = [];
  let fetch_list: any[] = [];
  for (let i = 0; i < list.length; i++) {
    fetch_list.push(Axios.get(list[i]));
  }
  console.log(fetch_list);
  Axios.all(fetch_list).then(
    Axios.spread(result_list => {
      result_list.map((item: { title: string }) => {
        name_list.push(item.title);
      });
    })
  );
  return name_list;
}

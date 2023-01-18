import { useToastContext } from "@contexts/toastContext";
const BASE_URL = "https://swapi.dev/api/";
export default function useFetch() {
  const { showToast } = useToastContext();

  const fetcher = (url: string) => {
    return fetch(BASE_URL + url)
      .then((res) => {
        res.status !== 200 && showToast(res.statusText, "error");
        res.status === 200 && showToast("Success", "success");
        return res.json();
      })
      .then((res) => res);
  };

  return { fetcher };
}

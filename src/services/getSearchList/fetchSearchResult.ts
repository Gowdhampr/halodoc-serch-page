import { SEARCH_TYPE_CONFIG_MAP } from "@/sections/SearchResultSection/searchTypeConfig";
import { API } from "../apiEndPoints/endPoints";
import { SearchResultRefinedData } from "@/type/type";

export const fetchSearchResult = async (type: string, searchQuery: string) => {
  let endPoint = "";
  const isHackerNews = type === SEARCH_TYPE_CONFIG_MAP.HACKER_NEWS_SEARCH;
  if (isHackerNews) {
    endPoint = API.hackerNewsSearch;
  } else {
    endPoint = API.wikiSearch;
  }

  return await fetch(endPoint + searchQuery)
    .then(async (res) => await res.json())
    .then((data) => {
      let result: SearchResultRefinedData[];

      if (isHackerNews) {
        result = data.hits as SearchResultRefinedData[];
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        result = data[1].map((res: any, i: number) => {
          return {
            author: res,
            title: res,
            url: data[3][i],
          };
        });
      }

      return result;
    });
};

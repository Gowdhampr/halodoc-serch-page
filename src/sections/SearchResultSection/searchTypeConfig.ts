import { API } from "@/services/apiEndPoints/endPoints";

export const SEARCH_TYPE_CONFIG_MAP = {
  WIKI_SEARCH: "wikiSearch",
  HACKER_NEWS_SEARCH: "hackerNew",
};

export const SEARCH_TYPE_OPTION_MAP = [
  {
    label: "Hacker News",
    value: SEARCH_TYPE_CONFIG_MAP.HACKER_NEWS_SEARCH,
  },
  {
    label: "Wiki Search",
    value: SEARCH_TYPE_CONFIG_MAP.WIKI_SEARCH,
  },
];

export const SEARCH_TYPE_CONFIG = {
  HackerNewsSearch: {
    label: "Hacker News",
    type: SEARCH_TYPE_CONFIG_MAP.HACKER_NEWS_SEARCH,
    sourceEndPoint: API.hackerNewsSearch,
    authorDetailsEndPoint: API.hackerNewsAuthorSearch,
  },
  wikiSearch: {
    label: "Wiki Search",
    type: SEARCH_TYPE_CONFIG_MAP.WIKI_SEARCH,
    sourceEndPoint: API.wikiSearch,
    authorDetailsEndPoint: API.wikiAuthorSearch,
  },
};

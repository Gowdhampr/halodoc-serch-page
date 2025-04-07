export interface HackerNewsResponseData {
  hits: SearchResultRefinedData[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
}

export interface SearchResultRefinedData {
  author: string;
  title: string;
  url: string;
  submissionCount?: number;
}

export interface WikiSearchResponseData {
  data: string[];
}

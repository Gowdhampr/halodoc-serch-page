"use client";

import React, { useState } from "react";
import Search from "@/ui/search";
import DropDown from "@/ui/dropDown";
import Button from "@/ui/button";
import { fetchSearchResult } from "@/services/getSearchList/fetchSearchResult";
import { SEARCH_TYPE_OPTION_MAP } from "./searchTypeConfig";
import { SearchResultRefinedData } from "@/type/type";
import Link from "next/link";
import { fetchSubmissionCount } from "@/services/getSubmissionCount/getSubmissionCount";

const SearchResultSection = () => {
  const [inputSearch, setInputSearch] = useState<{
    searchString: string;
    searchType: { label: string; value: string };
  }>({ searchString: "", searchType: { label: "", value: "" } });

  const [searchResult, setSearchResult] = useState<
    SearchResultRefinedData[] | null
  >();

  const handleChangeSearch = (val: string) => {
    //Other manipulation
    setInputSearch({ ...inputSearch, searchString: val });
  };

  const handleSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target;

    setInputSearch({
      ...inputSearch,
      searchType: { value: option.value, label: option.innerText },
    });
  };

  const handleClickSearch = async () => {
    if (!inputSearch.searchType.value || !inputSearch) {
      setSearchResult(null);
      return;
    }
    const result: SearchResultRefinedData[] = await fetchSearchResult(
      inputSearch.searchType.value,
      inputSearch.searchString
    );

    setSearchResult(result);

    const authorList = result.map((auth) => auth.author);

    const submissionAllCount = Promise.all(
      authorList.map(async (authorName) => {
        return await fetchSubmissionCount(
          inputSearch.searchType.value,
          authorName
        );
      })
    );

    // const karmaPoint= (await submissionAllCount).map(karmaPoint => karmaPoint.karma)
  };

  return (
    <div className="max-w-[800px] h-screen m-auto">
      <div className="searchAction flex justify-between bg-gray-50 my-6">
        <Search
          value={inputSearch.searchString}
          onChange={handleChangeSearch}
        />
        <DropDown
          onChange={handleSelectOption}
          options={SEARCH_TYPE_OPTION_MAP}
          defaultValue={SEARCH_TYPE_OPTION_MAP[0].value}
          // selectedOption={SEARCH_TYPE_OPTION_MAP[1]}
        />
        <Button
          text="Search"
          onClick={handleClickSearch}
          disabled={!inputSearch.searchType.value || !inputSearch}
        />
      </div>

      <div className="listWrapper flex flex-col">
        {searchResult?.map((res, i) => {
          return (
            <div key={i} className="border-2 flex justify-between">
              <Link
                href={res.url}
                target="_blank"
                className="underline text-blue-500"
              >
                {res.title}
              </Link>
              <p>{res.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultSection;

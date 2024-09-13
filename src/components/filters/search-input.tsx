"use client";
import { SearchIcon, XCircleIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { categoryfilterValue, filterBySearch } from "@/redux/slices/filters";

export default function SearchInput() {
    const filterByValue = useAppSelector(categoryfilterValue);
    const dispatch = useAppDispatch();

	const handleSearchFilter = (searchValue:string) => {
		dispatch(filterBySearch({
			...filterByValue,
			search: searchValue
		}));
	}

    return (
        <div className="flex items-center pl-1 rounded-xl ring-1 ring-teal-700">
            <SearchIcon className="w-5 h-5 text-teal-700" />
            <Input type="text" 
                placeholder="Search product ..." 
                className="rounded-xl border-0 focus-visible:ring-0"
                value={filterByValue.search}
                onChange={({target}) => handleSearchFilter(target.value)}
            />
            {filterByValue.search.length ? 
                <XCircleIcon className="w-5 h-5 mr-1 text-gray-700 cursor-pointer" onClick={() => handleSearchFilter("")} /> 
            : null}
        </div>
    )
}

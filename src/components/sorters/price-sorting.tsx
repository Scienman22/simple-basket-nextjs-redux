"use client";
import React from 'react'

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ArrowDown01Icon, ArrowDownUpIcon, ArrowUp10Icon } from "lucide-react";

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { sortBy, SortBySliceType, sortProductValue } from '@/redux/slices/sorter';

export default function PriceSorting() {
    const dispatch = useAppDispatch();
    const sortByValue = useAppSelector(sortProductValue);

    const handleOnSortChange = React.useCallback((priceSorting: SortBySliceType["price"]) => {
        dispatch(sortBy({price: priceSorting}));
    }, [dispatch])

    return (
        <div className="flex w-full justify-between">
            <span className="font-semibold">{`Products`}</span>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Sort price:</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-15">
                    <DropdownMenuRadioGroup value={sortByValue.price} onValueChange={handleOnSortChange}>
                        <DropdownMenuRadioItem value="relevant" className="gap-3">
                            <ArrowDownUpIcon className="h-4 w-4" /> Relevant</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="asc" className="gap-3">
                            <ArrowDown01Icon className="h-4 w-4" /> Lower to higher</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="desc" className="gap-3">
                            <ArrowUp10Icon className="h-4 w-4" /> Higher to lower</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

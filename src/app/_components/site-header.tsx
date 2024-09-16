"use client";

import SearchInput from "@/components/filters/search-input";
import BasketCount from "@/components/basket/basket-count";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SiteHeader() {
    return (
        <div className="flex items-center justify-between">
            <SearchInput />

            <div className="flex items-center gap-5">
                <BasketCount />

                <div className="flex flex-col">
                    <span className="text-sm font-medium text-right">{`Irwin Ian`}</span>
                    <span className="text-xs text-gray-600 text-right">{`@username`}</span>
                </div>

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

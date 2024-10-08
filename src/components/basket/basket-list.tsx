"use client";
import React from 'react';

import BasketItem from '@/components/basket/basket-item';
import { basketItemType } from '@/types/product';

import { useAppSelector } from "@/redux/hooks";
import { basket } from "@/redux/slices/basket";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function BasketList() {
    const {basketItemsList, isBasketLoading} = useAppSelector(basket);

    if (isBasketLoading) {
        return <h2>{`Loading...`}</h2>
    }

    return (
        <ScrollArea className="w-full" style={{ height: `calc(100vh - 250px)`}}>
            <div className="flex-1 whitespace-pre-wrap space-y-2">
            {
                basketItemsList.length ? basketItemsList.map((basketItem: basketItemType) => (
                    <BasketItem key={basketItem.id} item={basketItem} />
                )) : (
                    <Alert>
                        <ExclamationTriangleIcon className="h-4 w-4" />
                        <AlertTitle>{`Basket is Empty!`}</AlertTitle>
                        <AlertDescription>
                            {`Add item from products by clicking the "Add to basket" button.`}
                        </AlertDescription>
                    </Alert>
                )
            }
            </div>
            <ScrollBar />
        </ScrollArea>
    )
}

"use client";
import React from 'react';

import Counter from '@/components/basket/counter';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { basketItemType } from '@/types/product';
import { useAppDispatch } from '@/redux/hooks';
import { addProduct, removeProduct } from '@/redux/slices/basket';
import { productOnBasket } from '@/redux/slices/products';

export default function BasketItem({
    item
}: {
    item: basketItemType
}) {
    const dispatch = useAppDispatch();

    const handleOnCount = React.useCallback((count:number) => {
        if (count>item.quantity) {
            dispatch(addProduct(item));
            dispatch(productOnBasket({id: item.id, do: "added"}));
        } else {
            dispatch(removeProduct(item.id));
            dispatch(productOnBasket({id: item.id, do: "removed"}));
        }
    }, [dispatch, item])

    return (
        <Card className="w-full">
            <CardHeader className="p-3 pb-0">
                <CardTitle className="flex items-center justify-between font-normal text-sm">
                    {item.title}

                    {/* <p className="font-normal">{`$${item.price}`}</p>   */}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between p-3">
                <Counter count={item.quantity} maxCountReach={item.stock === item.quantity} onCount={handleOnCount} />
                <div className="text-right">{`$${ (item.price*item.quantity).toFixed(2) }`}</div>
            </CardContent>
        </Card>
    )
}

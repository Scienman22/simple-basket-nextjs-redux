"use client";
import React from 'react';

import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { BackpackIcon } from "@radix-ui/react-icons";
import { productType } from '@/types/product';
import { useAppDispatch } from '@/redux/hooks';
import { addProduct } from '@/redux/slices/basket';

export default function ProductItem({
    item
} : {
    item: productType
}) {
    const dispatch = useAppDispatch();

    const onAddToBasket = React.useCallback(() => {
        dispatch(addProduct(item));
    }, [dispatch, item])

    return (
        <Card className="w-full">
            <CardHeader className="p-3 pb-0">
                <CardTitle className="flex justify-between">
                    {item.name}

                    <p className="font-normal">{`Price: $${item.price}`}</p>
                </CardTitle>
            </CardHeader>
            <CardFooter className="p-3">
                <div className="ml-auto"></div>
                <Button size="sm" onClick={onAddToBasket}>
                    <BackpackIcon className="mr-2 h-4 w-4" /> Add to Basket
                </Button>
            </CardFooter>
        </Card>
    )
}

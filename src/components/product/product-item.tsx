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
import Image from 'next/image';
import { productOnBasket } from '@/redux/slices/products';

export default function ProductItem({
    item
} : {
    item: productType
}) {
    const dispatch = useAppDispatch();

    const onAddToBasket = React.useCallback(() => {
        dispatch(addProduct(item));
        dispatch(productOnBasket({id: item.id, do: "added"}));
    }, [dispatch, item])

    return (
        <Card className="w-full">
            <CardHeader className="p-3 pb-0">
                <CardTitle className="flex justify-between">
                    <div className="flex items-center space-x-4">
                        <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
                            <Image src={item.thumbnail} width={100} height={100} className="aspect-square h-full w-full" alt={''} />
                        </span>
                        <div>
                            <p className="text-sm font-medium leading-none">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    </div>

                    <p className="font-normal w-[100px]">{`Price: $${item.price}`}</p>
                </CardTitle>
            </CardHeader>
            <CardFooter className="p-3 gap-4">
                <div className="ml-auto">
                    <p className="text-sm">{`Stock: ${item.stock} item(s) left`}</p>
                </div>
                <Button size="sm" onClick={onAddToBasket} disabled={item.stock <= 0}>
                    <BackpackIcon className="mr-2 h-4 w-4" /> {item.stock <= 0 ? "Out of Stock" : "Add to Basket"}
                </Button>
            </CardFooter>
        </Card>
    )
}

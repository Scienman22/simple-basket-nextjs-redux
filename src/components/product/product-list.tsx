"use client";
import React from 'react';

import ProductItem from '@/components/product/product-item';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { productType } from '@/types/product';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { products, storeProducts } from "@/redux/slices/products";

export default function ProductList({
    data
}: {
    data: {
        total: number
        products: productType[]
    }
}) {
    const {productsList, isProductsLoading} = useAppSelector(products);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        let isSubscribed = true;

		if (isSubscribed) {
			dispatch(storeProducts(data.products));
		}

		return () => {isSubscribed = false};
    }, [data, dispatch])

    const filteredProductsList = React.useMemo(() => {
        // todo: add filter
        return productsList;
    }, [productsList])

    if (isProductsLoading) {
        return <h2>{`Loading...`}</h2>
    }

    return (
        <ScrollArea style={{ height: `calc(100vh - 200px)`}}>
            <div className="flex-1 whitespace-pre-wrap space-y-2">
            {
                filteredProductsList.map((product: productType) => (
                    <ProductItem key={product.id} item={product} />
                ))
            }
            </div>
            <ScrollBar />
        </ScrollArea>
    )
}

"use client";
import React from 'react';
import _ from 'lodash';

import ProductItem from '@/components/product/product-item';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { productType } from '@/types/product';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { products, storeProducts } from "@/redux/slices/products";
import { categoryfilterValue } from '@/redux/slices/filters';
import { sortProductValue } from '@/redux/slices/sorter';

export default function ProductList({
    data
}: {
    data: {
        total: number
        products: productType[]
    }
}) {
    const dispatch = useAppDispatch();
    const {productsList, isProductsLoading} = useAppSelector(products);
    const sortByValue = useAppSelector(sortProductValue);
    const filterByValue = useAppSelector(categoryfilterValue);

    React.useEffect(() => {
        let isSubscribed = true;

		if (isSubscribed) {
			dispatch(storeProducts(data.products));
		}

		return () => {isSubscribed = false};
    }, [data, dispatch])

    const filteredProductsList = React.useMemo(() => {
        const filteredProducts = _.filter(productsList, productItem => {
            return _.toLower(productItem.title).indexOf(_.toLower(filterByValue.search)) >- 1 && (
                (!filterByValue.selectedCategory.length) ? true
                : _.includes(filterByValue.selectedCategory, productItem.category)
            )
        });

        return (sortByValue.price === 'relevant') ? filteredProducts : _.orderBy(filteredProducts, ['price'], [`${sortByValue.price === "asc" ? "asc" : "desc"}`]);
    }, [productsList, filterByValue, sortByValue])

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

"use client";
import React from 'react';

import ProductItem from '@/components/product/product-item';
import { productType } from '@/types/product';

import { useAppSelector } from "@/redux/hooks";
import { products } from "@/redux/slices/products";

export default function ProductList() {
    const {productsList, isProductsLoading} = useAppSelector(products);

    const filteredProductsList = React.useMemo(() => {
        return productsList;
    }, [productsList])

    if (isProductsLoading) {
        return <h2>{`Loading...`}</h2>
    }

    return (
        <React.Fragment>
            {
                filteredProductsList.map((product: productType) => (
                    <ProductItem key={product.id} item={product} />
                ))
            }
        </React.Fragment>
    )
}

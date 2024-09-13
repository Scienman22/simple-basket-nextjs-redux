import React from 'react';
import Link from 'next/link';

import ProductItem from '@/components/product/product-item';

import { Button } from '@/components/ui/button';
import { ArrowLeftCircleIcon } from 'lucide-react';

const fetchProduct = async (productId:string) => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        cache: "default"
    }).then (res => res.json());

    return response;
}

export default async function ProductPage({
    params
}: {
    params: {id: string}
}) {
    const product  = await fetchProduct(params?.id);

    return (
        <div className="grid grid-rows-[1fr] gap-4 px-8 sm:px-20 sm:pt-8 font-[family-name:var(--font-geist-sans)]">
            <div className="flex h-full items-center gap-2">
                <Link href={'/'}>
                    <Button size="sm" variant="outline">
                        <ArrowLeftCircleIcon className="h-4 w-4 mr-2" />
                        Back
                    </Button>
                </Link>

                <span className="font-semibold">{`Product`}</span>
            </div>

            <ProductItem item={product} />
        </div>
    )
}

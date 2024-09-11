"use client";
import React from 'react';

import { productType } from '@/types/product';
import { useAppDispatch } from "@/redux/hooks";
import { fetchProductItem } from "@/redux/slices/products";

import ProductItem from '@/components/product/product-item';
import ProductLoading from '@/components/product/product-loading';

import {
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export default function ProductPageModal({
  	params
}: {
	params: {id: string}
}) {
	const dispatch = useAppDispatch();
	const [selectedProduct, setSelectedProduct] = React.useState<productType|null>(null);
	const [isProductLoading, setProductLoading] = React.useState<boolean>(false);

	React.useEffect(() => {
		let isSubscribed = true;
		
		const fetchData = async () => {
			setProductLoading(true);

			await dispatch(fetchProductItem(params.id))
				.unwrap()
				.then((responseData) => {
					// handle result here
					if (responseData.status) {
						setSelectedProduct(responseData.data);
					}

					setProductLoading(false);
				})
				.catch((SerializedError) => {
					console.log(`ERROR: `, SerializedError);
				});
		}

		if (isSubscribed) {
			// Note: deleting all the recipe will run this and repopulate the list.
			fetchData().catch(console.error);
		}

		return () => {isSubscribed = false};
	}, [dispatch, params.id])

    return (
		<React.Fragment>
			<DialogHeader>
				<DialogTitle>{`Product`}</DialogTitle>
				<DialogDescription></DialogDescription>
			</DialogHeader>

			<div className="grid gap-4 py-4">
				{
					isProductLoading ? (
						<ProductLoading />
					) : null
				}
				{selectedProduct && <ProductItem item={selectedProduct} />}
			</div>
		</React.Fragment>
    )
}

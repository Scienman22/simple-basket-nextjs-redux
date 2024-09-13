import BasketList from "@/components/basket/basket-list";
import BasketTotal from "@/components/basket/basket-total";
import ProductList from "@/components/product/product-list";
import PriceSorting from "@/components/sorters/price-sorting";

const initLimit = 10;

const fetchProducts = async () => {
	const response = await fetch(`https://dummyjson.com/products?limit=${initLimit}`, {
		cache: "default"
	}).then (res => res.json());

	return response;
}

export default async function Home() {
	const products  = await fetchProducts();

	return (
		<div className="flex space-x-4 font-[family-name:var(--font-geist-sans)]">
			<div className="w-2/3 bg-white p-4 space-y-4 rounded-2xl shadow-md" style={{ height: `calc(100vh - 100px)`}}>
				<div className="flex flex-col h-full items-start gap-2">
					<PriceSorting />

					<ProductList data={products} />
				</div>
			</div>

			<div className="w-1/3 bg-white p-4 space-y-4 rounded-2xl shadow-md" style={{ height: `calc(100vh - 100px)`}}>
				<div className="flex flex-col h-full items-start gap-2">
					<span className="font-semibold">{`Basket`}</span>

					<BasketList />

					<BasketTotal />
				</div>
			</div>
		</div>
	);
}

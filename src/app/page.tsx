import BasketList from "@/components/basket/basket-list";
import BasketTotal from "@/components/basket/basket-total";
import ProductList from "@/components/product/product-list";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

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
    <div className="grid grid-rows-[1fr] items-center justify-items-center px-8 sm:px-20 sm:pt-8 font-[family-name:var(--font-geist-sans)]">
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border h-full w-full"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex flex-col h-full items-start p-6 gap-2">
            <span className="font-semibold">{`Products`}</span>

            <ProductList data={products} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex flex-col h-full items-start p-6 gap-2">
            <span className="font-semibold">{`Basket`}</span>

            <BasketList />

            <BasketTotal />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

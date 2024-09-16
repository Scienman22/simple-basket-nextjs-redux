"use client";
import Image from 'next/image';

import { useAppSelector } from '@/redux/hooks';
import { basket } from "@/redux/slices/basket";

export default function BasketCount() {
    const {basketCount} = useAppSelector(basket);

    return (
        <div className="bg-white rounded-full w-7 h-7 flex  items-center justify-center relative shadow-lg">
            <Image src="/images/basket-cart.png" alt="" width={24} height={24} />
            <div className="absolute -top-3 -right-3 rounded-full bg-violet-500 w-6 h-6 text-xs text-white flex items-center justify-center">
                {basketCount}
            </div>
        </div>
    )
}

"use client";
import React from 'react';

import { useAppSelector } from "@/redux/hooks";
import { basket } from "@/redux/slices/basket";
import _ from 'lodash';

export default function BasketTotal() {
    const {basketItemsList} = useAppSelector(basket);

    return (
        <div className="flex justify-between w-full border-t-2">
            <span className="font-semibold">{`Total`}</span>

            <span className="font-light text-lg">{`$${_.sumBy(basketItemsList, item => item.price*item.quantity)}`}</span>
        </div>
    )
}

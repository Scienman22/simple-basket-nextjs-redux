"use client";
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export default function BrandItem({
    brand
}: {
    brand: {
        id: string
        name: string
    }
}) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={brand.id} />
            <label
                htmlFor={brand.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {brand.name}
            </label>
        </div>
    )
}

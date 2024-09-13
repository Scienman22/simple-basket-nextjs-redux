"use client";
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export default function CategoryItem({
    category,
    onCheck
}: {
    category: string
    onCheck: (isChecked:boolean) => void
}) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={category} onCheckedChange={onCheck} />
            <label
                htmlFor={category}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {category}
            </label>
        </div>
    )
}

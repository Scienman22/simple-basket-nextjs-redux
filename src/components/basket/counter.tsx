"use client";
import React from 'react'

import { Button } from "@/components/ui/button";
import { MinusCircleIcon, PlusCircleIcon, Trash2Icon } from 'lucide-react';

export default function Counter({
    count,
    maxCountReach=false,
    onCount
}: {
    count: number
    maxCountReach: boolean
    onCount: (n:number) => void
}) {
    return (
        <div className="flex items-center justify-between min-w-[130px]">
            <Button variant="outline" size="icon" onClick={() => onCount(--count)}>
                { (count===1) ? <Trash2Icon className="h-4 w-4" /> : <MinusCircleIcon className="h-4 w-4" /> }
            </Button>

            <span className="font-medium">{count}</span>

            <Button variant="outline" size="icon" onClick={() => onCount(++count)} disabled={maxCountReach}>
                <PlusCircleIcon className="h-4 w-4" />
            </Button>
        </div>
    )
}

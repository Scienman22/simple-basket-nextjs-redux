"use client";
import React from 'react'

import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductLoading() {
    return (
        <Card className="w-full">
            <CardHeader className="p-3 pb-0">
                <CardTitle className="flex justify-between">
                    <div className="flex items-center space-x-4">
                        <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
                            <Skeleton className="h-12 w-12 rounded-full" />
                        </span>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[200px]" />
                            <Skeleton className="h-4 w-[250px]" />
                        </div>
                    </div>

                    <Skeleton className="h-4 w-[50px]" />
                </CardTitle>
            </CardHeader>
            <CardFooter className="p-3 gap-4">
                <div className="ml-auto">
                    <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-10 w-[100px]" />
            </CardFooter>
        </Card>
    )
}

import React from 'react'

export default function MarketLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex">
            <div className="w-2/3">

            </div>

            <div className="w-1/3">
                { children }
            </div>
        </div>
    )
}

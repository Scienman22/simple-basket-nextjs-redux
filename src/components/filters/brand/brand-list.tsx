import React from 'react'
import BrandItem from './brand-item'

export default function BrandList() {
    return (
        <React.Fragment>
            <h3 className="text-sm uppercase font-medium font-mono">{`brand`}</h3>
            
            <div className="space-y-1 mb-2 pl-4">
                {
                    [
                        {id:'brandA', name:"Brand A"},
                        {id:'brandB', name:"Brand B"}
                    ].map(brandItem => (
                        <BrandItem key={brandItem.id} brand={brandItem} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}

"use client";
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { categoryfilterValue, fetchProductCategories, filterByCategory } from '@/redux/slices/filters';

import CategoryItem from './category-item'
import { ScrollArea } from '@/components/ui/scroll-area';

export default function CategoryList() {
    const dispatch = useAppDispatch();
    const {categories, isLoading} = useAppSelector(categoryfilterValue);

    const handleOnCheck = React.useCallback((categoryItem: string, isChecked: boolean) => {
        dispatch(filterByCategory({categoryItem, isChecked}));
    }, [dispatch])

    React.useEffect(() => {
		let isSubscribed = true;

		const fetchData = async () => {
			dispatch(fetchProductCategories());
		}

		if (isSubscribed) {
			fetchData().catch(console.error);
		}

		return () => {isSubscribed = false};
	}, [dispatch])
    
    return (
        <React.Fragment>
            <h3 className="text-sm uppercase font-medium font-mono">{`category`}</h3>
            
            <ScrollArea style={{ height: `calc(100vh - 200px)`}}>
            <div className="space-y-1 mb-2 pl-4">
                {
                    isLoading ? <div>{`Loading...`}</div> : null
                }

                {
                    categories.map((categoryItem:string) => (
                        <CategoryItem 
                            key={categoryItem} 
                            category={categoryItem} 
                            onCheck={(isChecked:boolean) => handleOnCheck(categoryItem, isChecked)} 
                        />
                    ))
                }
            </div>
            </ScrollArea>
        </React.Fragment>
    )
}

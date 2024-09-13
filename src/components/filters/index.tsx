"use client";

// import BrandList from "@/components/filters/brand/brand-list";
import CategoryList from "@/components/filters/category/category-list";

export default function Filters() {
    return (
        <div className="bg-white p-4 space-y-4 rounded-2xl shadow-md" style={{ height: `calc(100vh - 100px)`}}>
            <h1 className="text-xl font-medium">{`Filters`}</h1>

            {/* <BrandList /> */}

            <CategoryList />
        </div>
    )
}

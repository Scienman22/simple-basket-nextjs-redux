import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";

import Image from "next/image";
import Link from "next/link";

import Filters from "@/components/filters";
import { SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Simple Basket",
    description: "Demonstrate using Redux",
};

export default function RootLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<StoreProvider>
                    {modal}

                    <div className="h-screen flex bg-gray-50 p-4 gap-4">
                        <div className="w-1/5 md:w-[8%] lg:w-[16%] xl:w-1/5 space-y-4">
                            <Link href={"/"} className="flex items-center justify-center">
                                <Image src="/images/basket.png" width={40} height={40} alt="" />
                                <h1 className="text-xl font-extrabold hidden xl:flex">
                                    <span className="font-thin">{`Simple`}</span>
                                    {`Basket`}
                                </h1>
                            </Link>

                            <Filters />
                        </div>

                        <div className="w-4/5 md:w-[92%] lg:w-[84%] xl:w-4/5 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center pl-1 rounded-xl ring-1 ring-teal-700">
                                    <SearchIcon className="w-5 h-5 text-teal-700" />
                                    <Input type="text" placeholder="Search product ..." className="rounded-xl border-0 focus-visible:ring-0" />
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="bg-white rounded-full w-7 h-7 flex  items-center justify-center relative shadow-lg">
                                        <Image src="/images/basket-cart.png" alt="" width={24} height={24} />
                                        <div className="absolute -top-3 -right-3 rounded-full bg-violet-500 w-6 h-6 text-xs text-white flex items-center justify-center">{`5`}</div>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-right">{`Irwin Ian`}</span>
                                        <span className="text-xs text-gray-600 text-right">{`@username`}</span>
                                    </div>

                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>

                            { children }
                        </div>
                    </div>
				</StoreProvider>
			</body>
		</html>
    );
}

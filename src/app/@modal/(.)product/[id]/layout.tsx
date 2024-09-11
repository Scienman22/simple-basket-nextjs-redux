"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const ProductModalLayout = ({ 
    children 
}: { 
    children: React.ReactNode 
}) => {
    const router = useRouter();
    return (
        <Dialog
            open={true}
            onOpenChange={(open) => {
                if (!open) {
                router.back();
                }
            }}
        >
            <DialogContent className="max-w-[600px] bg-white">
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default ProductModalLayout;
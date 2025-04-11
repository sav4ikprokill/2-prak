import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('items-center gap-1 inline-flex px-5 rounded-2xl h-[52px] bg-gray-50', className)}>
            <ArrowUpDown size={16}/>
            <p>Сортировка:</p>
            <p className="text-primary">популярное</p>
        </div>
        
    );
};
import { cn } from "@/lib/utils";

import { SortPopup } from "./sort-popup";
import { Categories } from "./categories";
import { Container } from "./container";


interface Props {
    className?: string;
}


export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('sticky top-0 bg-white py5 shadow-lg shawod-black/5 z-10', className)}>
            <Container className=" flex item-center justify-between">
     
            <Categories/>
             <SortPopup/>
       
             </Container>
        </div>
        
    );
}

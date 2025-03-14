import { Container } from "@/components/shader";
import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui";
import { ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="./pizza.svg" alt="" width={35} height={35} />
          <div>
            <h1 className="font-black uppercase text-2xl">Next pizza</h1>
            <p>вкусней уже некуда</p>
          </div>
        </div>
        {/* Правая часть */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} /> Профиль
          </Button>
          <Button variant="default" className="flex items-center gap-1">
            <span>520 ₽</span> 
            |
            <ShoppingCart size={16} />
            <span className="font-bold">3</span>
          </Button>
        </div>
      </Container>
    </header>
  );
};

import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import * as React from 'react';
import { Button } from '../ui';
import { ShoppingCart, User } from 'lucide-react';



interface Props {
    className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b ', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div className='flex items-center'>
                    <div className='p-2'>
                        <Image src="/pizz.png" alt="" width={35} height={35} />
                    </div>
                    <div>
                        <h1 className='font-black uppercase text-2xl text-lg'>next pizza</h1>
                        <p className='text-base text-sm'>вкусней уже некуда</p>
                    </div>

                </div>

                <div className='flex items-center gap-3'>
                    <Button variant="outline"> <User size={16} /> Войти</Button>
                    <Button variant="outline"> <ShoppingCart size={16} /></Button>
                </div>
            </Container>


        </header>
    );
}


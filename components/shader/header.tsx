import { cn } from '@/lib/utils';
import { Container } from './container';
import * as React from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props>=({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/* левый блок */}
                <div className='flex items-center gap-4'>
                    <Image src="/logo.png" width={35} height={35}/>
                    <div>
                        <h1 className='text-2xl font-black uppercase'>NEXT PIZZA</h1>
                        <p>вкусней  уже некуда</p>
                    </div>

                </div>
                {/* правый блок */}
                <div className='flex items-center gap-4'>
                    <Button variant="outline"><User size={16} />dfghjk</Button>
                    <Button variant="outline"><User size={16} />dfghjk</Button>
                </div>
            </Container>
        </header>
    );
}
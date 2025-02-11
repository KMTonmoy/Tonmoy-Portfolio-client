import React, { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import '../../app/globals.css';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div>

            <div className="flex">
                <Sidebar />
                <main className="flex justify-center w-full">{children}</main>
            </div>
        </div>
    );
}

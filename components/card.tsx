import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  title: ReactNode;
  href: string;
  children?: ReactNode;
}

export function Card({ title, href, children }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      <div className="font-medium text-lg mb-2">{title}</div>
      {children && <div className="text-sm text-gray-600 dark:text-gray-400">{children}</div>}
    </Link>
  );
}
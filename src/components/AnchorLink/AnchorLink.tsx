'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface AnchorLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AnchorLink({ href, children, className, onClick }: AnchorLinkProps) {
  const pathname = usePathname();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Если мы не на главной странице
    if (pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    
    // Если на главной — плавный скролл
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
    
    if (onClick) onClick();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
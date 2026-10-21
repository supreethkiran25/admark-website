import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export interface UniversalLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href?: string;
  to?: string;
  scroll?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, UniversalLinkProps>(
  ({ href, to, children, scroll: _scroll, onClick, ...props }, ref) => {
    const destination = to || href || '#';

    // External or protocols
    const isExternal =
      destination.startsWith('http://') ||
      destination.startsWith('https://') ||
      destination.startsWith('mailto:') ||
      destination.startsWith('tel:');

    // In-page hash link
    const isHash = destination.startsWith('#');

    if (isExternal || isHash) {
      return (
        <a
          ref={ref}
          href={destination}
          onClick={(e) => {
            if (isHash && destination.length > 1) {
              const target = document.getElementById(destination.slice(1));
              if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                // Update URL hash without reload
                window.history.pushState(null, '', destination);
              }
            }
            if (onClick) onClick(e);
          }}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <RouterLink
        ref={ref}
        to={destination}
        onClick={onClick}
        {...(props as any)}
      >
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = 'Link';
export default Link;

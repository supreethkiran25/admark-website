// Ambient TypeScript declarations for Next.js 16 modules
declare module 'next' {
  export interface NextConfig {
    reactStrictMode?: boolean;
    images?: Record<string, any>;
    experimental?: Record<string, any>;
    [key: string]: any;
  }

  export interface Metadata {
    title?: string | { default?: string; template?: string; absolute?: string };
    description?: string;
    keywords?: string[] | string;
    authors?: Array<{ name: string; url?: string }>;
    creator?: string;
    publisher?: string;
    metadataBase?: URL | null;
    alternates?: {
      canonical?: string;
      languages?: Record<string, string>;
    };
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      images?: Array<{ url: string; width?: number; height?: number; alt?: string }> | string[];
      locale?: string;
      type?: string;
    };
    twitter?: {
      card?: string;
      title?: string;
      description?: string;
      images?: string[];
      creator?: string;
    };
    robots?: {
      index?: boolean;
      follow?: boolean;
      googleBot?: {
        index?: boolean;
        follow?: boolean;
        'max-video-preview'?: number;
        'max-image-preview'?: string;
        'max-snippet'?: number;
      };
    };
    icons?: {
      icon?: string | Array<{ url: string; sizes?: string; type?: string }>;
      apple?: string | Array<{ url: string; sizes?: string; type?: string }>;
    };
  }

  export namespace MetadataRoute {
    export type Sitemap = Array<{
      url: string;
      lastModified?: string | Date;
      changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
      priority?: number;
    }>;

    export interface Robots {
      rules: {
        userAgent?: string | string[];
        allow?: string | string[];
        disallow?: string | string[];
        crawlDelay?: number;
      } | Array<{
        userAgent?: string | string[];
        allow?: string | string[];
        disallow?: string | string[];
        crawlDelay?: number;
      }>;
      sitemap?: string | string[];
      host?: string;
    }
  }
}

declare module 'next/link' {
  import * as React from 'react';

  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
  }

  const Link: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<LinkProps> & React.RefAttributes<HTMLAnchorElement>
  >;

  export default Link;
}

declare module 'next/navigation' {
  export function usePathname(): string;
  export function notFound(): never;
  export function useRouter(): {
    push: (href: string) => void;
    replace: (href: string) => void;
    refresh: () => void;
    back: () => void;
    forward: () => void;
    prefetch: (href: string) => void;
  };
  export function useSearchParams(): URLSearchParams;
  export function useParams<T = Record<string, string | string[]>>(): T;
  export function redirect(url: string): never;
}

declare module 'next/server' {
  export class NextRequest extends Request {
    readonly nextUrl: URL;
    readonly ip?: string;
    readonly geo?: {
      city?: string;
      country?: string;
      region?: string;
      latitude?: string;
      longitude?: string;
    };
  }

  export class NextResponse<Body = unknown> extends Response {
    static json<T>(data: T, init?: ResponseInit): NextResponse<T>;
    static redirect(url: string | URL, init?: number | ResponseInit): NextResponse;
    static rewrite(destination: string | URL, init?: ResponseInit): NextResponse;
    static next(init?: ResponseInit): NextResponse;
  }
}

declare module 'next/server.js' {
  export class NextRequest extends Request {
    readonly nextUrl: URL;
    readonly ip?: string;
    readonly geo?: {
      city?: string;
      country?: string;
      region?: string;
      latitude?: string;
      longitude?: string;
    };
  }

  export class NextResponse<Body = unknown> extends Response {
    static json<T>(data: T, init?: ResponseInit): NextResponse<T>;
    static redirect(url: string | URL, init?: number | ResponseInit): NextResponse;
    static rewrite(destination: string | URL, init?: ResponseInit): NextResponse;
    static next(init?: ResponseInit): NextResponse;
  }
}

declare module 'next/types.js' {
  const content: any;
  export default content;
  export type AppProps = any;
  export type NextPage = any;
}

declare module 'next/dist/lib/metadata/types/metadata-interface.js' {
  const content: any;
  export default content;
  export type ResolvingMetadata = any;
  export type Metadata = any;
}

declare module 'next/dist/build/segment-config/app/app-segment-config.js' {
  const content: any;
  export default content;
  export type AppSegmentConfig = any;
}

declare module 'next/dist/*' {
  const content: any;
  export default content;
}

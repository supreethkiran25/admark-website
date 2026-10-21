// Ambient type definitions to reconcile Next.js internal build-time type mismatches
declare module 'next/dist/lib/metadata/types/metadata-interface.js' {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}

declare module 'next/dist/build/segment-config/app/app-segment-config.js' {
  export type InstantConfigForTypeCheckInternal = any;
  export type Prefetch = any;
  export type EnsureStatic = any;
}

declare module 'next/types.js' {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}

import type { MetadataRoute } from 'next';
import { SERVICES, PROJECTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.admarkdigitals.com';
  const now = '2026-10-21T12:00:00.000Z';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/process`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));

  const workRoutes: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}

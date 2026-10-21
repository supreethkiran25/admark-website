import { COMPANY } from '@/lib/data';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.admarkdigitals.com/#organization',
        name: COMPANY.name,
        url: 'https://www.admarkdigitals.com',
        logo: 'https://www.admarkdigitals.com/admark-logo-live-cropped.png',
        description: COMPANY.philosophy,
        slogan: COMPANY.mantra,
        email: COMPANY.email,
        telephone: COMPANY.phone1,
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY.hq.address,
          addressLocality: COMPANY.hq.city,
          addressRegion: COMPANY.hq.state,
          postalCode: COMPANY.hq.pincode,
          addressCountry: COMPANY.hq.country,
        },
        founder: COMPANY.leadership.map((l) => ({
          '@type': 'Person',
          name: l.name,
          jobTitle: l.role,
        })),
        areaServed: ['India', 'Global'],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.admarkdigitals.com/#localbusiness',
        name: COMPANY.name,
        url: 'https://www.admarkdigitals.com',
        telephone: COMPANY.phone1,
        email: COMPANY.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY.hq.address,
          addressLocality: COMPANY.hq.city,
          addressRegion: COMPANY.hq.state,
          postalCode: COMPANY.hq.pincode,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.3051,
          longitude: 76.6554,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:30',
          closes: '18:30',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

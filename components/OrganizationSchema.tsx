import { Organization, WithContext } from "schema-dts";

export default function OrganizationSchema() {
  const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DJ Presskit",
    url: "https://djpresskit.com",
    logo: "https://djpresskit.com/logo.png",
    description:
      "Creamos sitios web profesionales y personalizados para DJs. Tu presskit digital listo en dias.",
    sameAs: [
      "https://twitter.com/dj-presskit",
      "https://instagram.com/dj-presskit",
      "https://facebook.com/dj-presskit",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-2477-313700",
      contactType: "customer service",
      email: "contact@dj-presskit.com",
      availableLanguage: ["Spanish"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

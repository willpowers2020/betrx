import { Review } from "@/lib/types";

export default function ReviewJsonLd({ review }: { review: Review }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${review.name} Review`,
    author: { "@type": "Organization", name: "BetRx" },
    publisher: { "@type": "Organization", name: "BetRx" },
    description: review.summary,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.overallRating,
      bestRating: 10,
      worstRating: 0,
    },
    itemReviewed: {
      "@type": "WebSite",
      name: review.name,
      url: review.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

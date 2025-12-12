import { getSEOPageBySlug, getAllSEOPageSlugs } from "@/lib/seo-data";
import { notFound } from "next/navigation";
import SEOPageClient from "./seo-page-client";

export async function generateStaticParams() {
  return getAllSEOPageSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const page = getSEOPageBySlug(params.slug);

  if (!page) {
    return {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://glowtap.app/seo/${page.slug}`,
      siteName: "GlowTap",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default function SEOPage({ params }: { params: { slug: string } }) {
  const page = getSEOPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return <SEOPageClient page={page} />;
}

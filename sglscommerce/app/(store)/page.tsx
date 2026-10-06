import {
  CategorySection,
  FeaturedProductsSection,
  HomeCta,
  HomeHero,
  NewsletterSection,
  PromoBannersSection,
  StoreBenefits,
} from "@/features/home/components/home-sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StoreBenefits />
      <CategorySection />
      <FeaturedProductsSection />
      <PromoBannersSection />
      <NewsletterSection />
      <HomeCta />
    </>
  );
}

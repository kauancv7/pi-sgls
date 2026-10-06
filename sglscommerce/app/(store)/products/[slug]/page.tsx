import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/features/products/components/product-detail";
import { getMockProductBySlug } from "@/features/products/data/mock-products";

type ProductDetailRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductDetailRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getMockProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return {
    title: product.name,
    description: `${product.name}, produto demonstrativo da categoria ${product.category} no SGLS Commerce.`,
  };
}

export default async function ProductDetailRoute({ params }: ProductDetailRouteProps) {
  const { slug } = await params;
  const product = getMockProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

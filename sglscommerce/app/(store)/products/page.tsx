import { ProductsPage } from "@/features/products/components/products-page";
import { mockProducts } from "@/features/products/data/mock-products";

export default function ProductsRoute() {
  return <ProductsPage products={mockProducts} />;
}

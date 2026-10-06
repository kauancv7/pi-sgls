import { ProductCard } from "@/features/products/components/product-card";
import { type Product } from "@/features/products/types/product";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

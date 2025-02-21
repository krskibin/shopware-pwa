import { Product } from "@shopware-pwa/shopware-6-client";

export function getProductRegularPrice({
  product
}: { product?: Product } = {}): number {
  return product && product.price ? product.price[0].gross : 0;
}

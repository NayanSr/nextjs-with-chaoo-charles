import { products } from "../../utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCart from "./components/products/ProductCart";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {products.map((product: any) => {
            return <ProductCart key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}

import { ChevronRight } from "lucide-react";
import { CategoryList } from "./_components/category-list";
import { Header } from "./_components/header";
import { PromoBanner } from "./_components/promo-banner";
import { Search } from "./_components/search";
import { Button } from "./_components/ui/button";
import { ProductList } from "./_components/product-list";

import { db } from "./_lib/prisma";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <div className="px-5 pt-6">
        <Header />
      </div>
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner
          src="/BannerPizzas-01.svg"
          alt="Até 30% de desconto em pizzas!"
        />
      </div>
      <div className="pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="text-[#323232] font-semibold text-base ">
            Pedidos Recomendados
          </h2>
          <Button
            variant="ghost"
            className="h-fit p-0 font-norma text-red-600 hover:bg-transparent"
          >
            Ver todos
            <ChevronRight size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner
          src="/BannerBurguer-02.svg"
          alt="A partir de R$17,90 em lanches"
        />
      </div>
    </>
  );
};
export default Home;

import { CategoryList } from "./_components/category-list";
import { Header } from "./_components/header";
import { PromoBanner } from "./_components/promo-banner";
import { Search } from "./_components/search";
export default function Home() {
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
    </>
  );
}

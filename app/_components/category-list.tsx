import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";
export const CategoryList = async () => {
  const categories = await db.category.findMany({});
  return (
    <div className=" flex overflow-scroll gap-12 py-4 bg-[#eeeeee]  drop-shadow-xl ">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

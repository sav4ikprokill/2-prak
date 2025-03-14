import { Container, Title, TopBar, Filters} from "@/components/shader";
import { Categories } from "@/components/shader/categories";
import { ProductCard } from "@/components/shader/product-card";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <Categories />
      <TopBar />
      <Container>
        <div className="flex">
          <div className="w-[250px]">
            <Filters />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductCard 
              id={0}
              name="Чизбургер-пицца"
              price={550}
              imageUrl="https://static.pizzasushiwok.ru/images/menu_new/831-1300.jpg" 
              className={""} 
            />
          </div>
        </div>
      </Container>
    </>
  );
}
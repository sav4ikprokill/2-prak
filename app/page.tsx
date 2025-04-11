import { Categories, Filters, Title } from "@/components/shared";
import { Container } from "@/components/shared";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { SortPopup } from "@/components/shared/sort-popup";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
    <Container className="mt-5">
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>
    </Container> 
    <TopBar/>

      <Container className="mt-20">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
                <Filters/>
          </div>
    
      <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductGroupList title="Пицца" items={[{
            id: 1,
            name: "Четыре сыра",
            imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif',
            price: '600',
            items: [{ price: 600 }]
          },
          {
            id: 1,
            name: "Диабло",
            imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6149eb101d8727573088fa2eff.avif',
            price: '600',
            items: [{ price: 600 }]
          },
          {
            id: 1,
            name: "Маргарита",
            imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6105ef6690b86fbde6150b5b0c.avif',
            price: '600',
            items: [{ price: 600 }]
          },
          {
            id: 1,
            name: "Колбаски барбекю",
            imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6150d498419e133df19945a00d.avif',
            price: '600',
            items: [{ price: 600 }]
          },
          {
            id: 1,
            name: "Двойная пепперони",
            imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef8537f2244e8caeb7c69e644d0537.avif',
            price: '600',
            items: [{ price: 600 }]
          },
          {
            id: 1,
            name: "Мясная",
            imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6108e3a1c9952cd3a7f39a4d02.avif',
            price: '600',
            items: [{ price: 600 }]
          },

          ]} categoryId={1}            />
          </div>
        </div>
        </div>
      </Container>

 
    </>
  );
}

export default function Page() {
  return (
    <main className="py-10 px-5 md:p-10">
      <div className="my-5 mb-15">
        <h1 className="text-center mb-2 font-bold text-3xl">Shops</h1>
        <p className="text-center text-gray-400 text-xs">
          List of supermarkets we buy your products from
        </p>
      </div>

      <article className="md:border-t border-gray-200 flex-1 grid md:grid-cols-3 gap-4 md:p-5">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </article>
    </main>
  );
}

function ShopCard() {
  return (
    <div>
      <div className="p-5 bg-gray-100 h-[280px]"></div>
      <h4 className="my-4">Bantama supermarket</h4>
    </div>
  );
}

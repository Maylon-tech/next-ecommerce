
import { ProductType } from "@/types/productType"
import Product from "./components/Product"

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  if(!res.ok) {
    throw new Error("Failed to Fetch data")
  }
  return res.json()
}



export default async function Home() {
  const products = await getProducts()

  // fake store Products API  --  https://fakestoreapi.com/products

  return (
      <div className="max-w-7xl mx- auto pt-8 px-8 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">

          {
            products.map((product: ProductType) => (
              <Product 
                key={product.id}
                product={product}
              />
            ))
          }          
        </div>
      </div>
  )
}

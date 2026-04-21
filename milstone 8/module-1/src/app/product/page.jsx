import Product from "@/component/product/Product";

 const getProduct = async ()=>{
        const res = await fetch('http://localhost:5000/products', {next:{revalidate:10}})
        return res.json()
 }

const productPage = async () => {
   const products = await getProduct()
    return (
        <div className="container mx-auto mt-10">
            <h1>total product: {products.length}</h1>
           <div className="grid grid-cols-3 gap-6">
             {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
           </div>

        </div>
    );
};

export default productPage;
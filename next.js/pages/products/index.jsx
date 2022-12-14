import Head from "next/head";
import Link from "next/link";


const details = [
    {id: 1, title: 'product 1'},
    {id: 2, title: 'product 2'},
    {id: 3, title: 'product 3'}
]

const Products = () => {
    return (
        <div>
        <Head>
            <title>Products page</title>
        </Head>
            <div>
                Products Page

                <ul>
                    {details.map(({id, title}) => (
                        <li>
                            <Link href={{
                                pathname: "products/[id]",
                                query: {id: id}
                            }}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Products;
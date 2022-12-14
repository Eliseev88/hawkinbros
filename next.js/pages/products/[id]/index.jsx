import Head from "next/head";
import {useRouter} from "next/router";

const Product = () => {
    const router = useRouter();
    console.log(router)
    return (
        <div>
            <Head>
                <title>detail product</title>
            </Head>
            <div>
                detail product
            </div>
        </div>
    )
}
export default Product;
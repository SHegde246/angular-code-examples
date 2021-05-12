import {Product} from "./product"

export class ProductService
{
    public getProducts()
    {
        let products: Product[];
        products=[
            new Product(1,'toys',1000),
            new Product(2,'laptop',60000),
            new Product(1,'usb drive',1000),
            new Product(1,'power bank',2500),
        ];
        return products;
    }
}
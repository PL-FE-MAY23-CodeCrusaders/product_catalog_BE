/* eslint-disable linebreak-style */
export type Product = {
    id: number;
    category: string;
    phoneId: string;
    itemId: string;
    name: string;
    fullPrice: number;
    price: number;
    screen: string;
    capacity: string;
    color: string;
    ram: string;
    year: number;
    image: string; 
};
export type Phone = { 
    id: string;
    namespaceId: string;
    name: string;
    capacityAvailable: string[];
    capacity: string;
    priceRegular: number;
    priceDiscount: number;
    colorsAvailable: string;
    color: string;
    images: string[];
    description: {
        title:string;
        text:string[];
    }[];
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    camera: string;
    zoom: string;
    cell: string[]; 
}
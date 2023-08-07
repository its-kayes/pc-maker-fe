export interface IProduct {
    _id?: string;
    image: string;
    name: string;
    category: string;
    categorySlug: string;
    status: string;
    price: number;
    description: string;
    keyFeatures: {
        brand: string;
        model: string;
        specification: string;
        port: string;
        type: string;
        resolution: string;
        voltage: string;
    };
    individualRating: number;
    averageRating: number;
    reviews: IReview[];
    isFeatured: boolean;
}

export interface IReview {
    user: string;
    image?: string;
    rating: number;
    comment: string;
}

export interface ICategory {
    _id?: string;
    name: string;
    slug: string;
    isFeatured: boolean;
}

export interface ILink {
    _id?: string;
    title: string;
    url: string;
}

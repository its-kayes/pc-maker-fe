import { ILink } from "./type";

export const homeUrl: string = '/'
export const pcBuildUrl: string = '/pc-build'
export const logiinUrl: string = '/login'
export const allProductsUrl: string = '/all-products'

export const bdtSymbol: string = '৳';


export const footerLinks: ILink[] = [
    {
        _id: "foot_1",
        title: "Home",
        url: homeUrl,
    },
    {
        _id: "foot_2",
        title: "All Books",
        url: homeUrl,
    },
    {
        _id: "foot_3",
        title: "Add Book",
        url: homeUrl,
    },
    {
        _id: "foot_4",
        title: "Sign In",
        url: homeUrl,
    },
    {
        _id: "foot_5",
        title: "Sign Up",
        url: homeUrl,
    },
    {
        _id: "foot_6",
        title: "Books",
        url: homeUrl,
    },
]

export const catDropdownItems = [
    {
        "_id": "cpu_1",
        "name": "CPU / Processor",
        "slug": "processor",
        "isFeatured": true
    },
    {
        "_id": "motherboard_1",
        "name": "Motherboard",
        "slug": "motherboard",
        "isFeatured": true
    },
    {
        "_id": "ram_1",
        "name": "RAM",
        "slug": "ram",
        "isFeatured": true
    },
    {
        "_id": "psu_1",
        "name": "Power Supply Unit",
        "slug": "power-supply",
        "isFeatured": true
    },
    {
        "_id": "storage_1",
        "name": "Storage Device",
        "slug": "storage-device",
        "isFeatured": false
    },
    {
        "_id": "monitor_1",
        "name": "Monitor",
        "slug": "monitor",
        "isFeatured": false
    },
    {
        "_id": "gpu_1",
        "name": "GPU",
        "slug": "gpu",
        "isFeatured": true
    },
    {
        "_id": "mouse_1",
        "name": "Mouse",
        "slug": "mouse",
        "isFeatured": false
    },
    {
        "_id": "keyboard_1",
        "name": "Keyboard",
        "slug": "keyboard",
        "isFeatured": true
    }
]

const CustomStar = (
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
)

export const starCustomStyle = {
    itemShapes: CustomStar,
    itemStrokeWidth: 1,
    activeStrokeColor: '#575fcf',
    activeFillColor: '#757cd8',
    inactiveStrokeColor: '#bdbec4'
}
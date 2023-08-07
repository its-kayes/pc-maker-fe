import { IProduct } from '@/config/type'
import React from 'react'

type Props = {
    product: IProduct;
}

const ProductKeyFeatures = ({ product }: Props) => {
    return (
        <>
            <p className="text-base leading-4  text-gray-600">Brand:
                <span className='font-medium ml-1'>{product.keyFeatures.brand}</span>
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">Model:
                <span className='font-medium ml-1'>{product.keyFeatures.model}</span>
            </p>

            <p className="text-base leading-4 mt-4 text-gray-600">Specification:
                <span className='font-medium ml-1'>{product.keyFeatures.specification}</span>
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">Port:
                <span className='font-medium ml-1'>{product.keyFeatures.port}</span>
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">Type:
                <span className='font-medium ml-1'>{product.keyFeatures.type}</span>
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">Resolution:
                <span className='font-medium ml-1'>{product.keyFeatures.resolution}</span>
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">Voltage:
                <span className='font-medium ml-1'>{product.keyFeatures.voltage}</span>
            </p>
        </>
    )
}

export default ProductKeyFeatures
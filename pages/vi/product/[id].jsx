import React from 'react';
import PropTypes from 'prop-types';

import { pathProductDetails } from '../../../constant'

// Containers
import ProductDetail from '../../../containers/ProductDetail';

// This function gets called at build time
export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = pathProductDetails.map((productDetail) => ({
        params: { id: productDetail.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const product = pathProductDetails.find(product => product.id === params.id)

    // Pass post data to the page via props
    return { props: { product } }
}

const ProductDetailPage = (props) => {
    return (
        <div>
            <ProductDetail lang={'vi'} product={props.product} />
        </div>
    );
};

ProductDetailPage.propTypes = {};

export default ProductDetailPage;
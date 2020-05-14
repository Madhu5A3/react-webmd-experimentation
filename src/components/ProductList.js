import React, {useEffect} from 'react';

import { connect } from 'react-redux';

import { fetchActions } from '../actionCreators/ProductAction';

function ProductList(props) {

    useEffect(() => {
        props.dispatch(fetchActions());
    })

    const { error, loading, products } = props

    if(loading){
        return <div>loading....</div>
    }

    if(error){
        return <div>error.....</div>
    }

    console.log(error, loading, products)
    return (
        <ul>
            {products.map(product => <li key={product.id}>{product.name}</li>)}
        </ul>
    );
}

const mapStateToProps = state => ({
    items:state.products.items,
    loading:state.products.loading,
    error: state.products.error
});
export default connect(mapStateToProps)(ProductList);
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actions } from "../../actions";
import Thumbnail from "./Thumbnail";

const mockProducts = [
    {
        id: "00001",
        url: "../../../server/thumbnails/product_1.jpg",
        name: "Product Title",
        price: 329,
    },
    {
        id: "00002",
        url: "../../../server/thumbnails/product_2.jpg",
        name: "Product Title",
        price: 229,
    },
    {
        id: "00003",
        url: "../../../server/thumbnails/product_3.jpg",
        name: "Product Title",
        price: 479,
    }
]

class Products extends Component {
    componentDidMount() {
        this.props.getProducts();
    }
    openDetails = id => () => {
        this.props.getDetails(id);
    }
    render() {
        const productList = this.props.products
        return (
            <div>
                <div>Products</div>
                {productList[0] && productList.map(i => (
                    <Thumbnail key={i._id} onClick={this.openDetails} product={i} />
                ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        details: state.details,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: bindActionCreators(actions.getAll, dispatch),
        getDetails: (id) => bindActionCreators(actions.getDetails, dispatch)(id),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
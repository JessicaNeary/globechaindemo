import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actionTypes } from "../../actions";

class Products extends Component {
    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        const productList = this.props.products;
        return (
            <div>
                <div>Products</div>
                {productList[0] && productList.map(i => (
                    <p key={i.id}>{i.id}</p>
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
        getProducts: bindActionCreators(actionTypes.getAll, dispatch),
        getDetails: (id) => bindActionCreators(actionTypes.getDetails, dispatch)
    }
}

export default connect(Products)
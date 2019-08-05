import React, { Component } from "react";
import { mapStateToProps, mapDispatchToProps } from "redux";
import { connect } from "react-redux";

class Products extends Component {
    state = {
        productList: []
    };
    render() {
        const productList = this.state.productList;
        return (
            <div>
                <div>Products</div>
                {productList[0] && productList.map(i => (
                    <p>{i.id}</p>
                ))
                }
            </div>
        )
    }
}

export default connect(Products)
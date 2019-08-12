import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actions } from "../../actions";
import Thumbnail from "./Thumbnail";
import Details from "./Details";
import Header from "./Header";
import { Page, Body } from "./Products.style.js";


const mockDetails =
    {
        _id: "00001",
        description: "Spectacularly beautiful quilted maple top. The PE-480 offers a broad distinction and excellent playability achieved with the advantage of a thinner body and lighter weight.\nThe heel-less cutaway neck joint and contoured back are also distinctive points the PE series offering.",
        attributes: [
            "Fingerboard: Techwood",
            "Frets: 22F",
            "Scale: 628mm",
            "Pickups: “CPH-1C” x 2"
        ]
    }

const mockProducts = [
    {
        _id: "00001",
        image: "../../../images/product_1.jpg",
        name: "Product Title",
        price: 329,
    },
    {
        _id: "00002",
        image: "../../../images/product_2.jpg",
        name: "Product Title",
        price: 229,
    },
    {
        _id: "00003",
        image: "../../../images/product_3.jpg",
        name: "Product Title",
        price: 479,
    }
]

class Products extends Component {
    state = {
        showDetails: null,
    }
    componentDidMount() {
        this.props.getProducts();
    }
    openDetails = item => () => {
        this.props.getDetails(item._id);
        this.setState({ showDetails: item });
    }
    closeDetails = () => {
        this.setState({ showDetails: null });
    }
    render() {
        const productList = this.props.products;
        const details = this.state.showDetails
        return (
            <Page>
                <Header
                    currentProduct={details && details.name}
                    close={this.closeDetails}
                />
                <Body>
                <Details {...this.props.details} {...details} />
                {productList[0] && productList.map(i => (
                    <Thumbnail key={i._id} onClick={this.openDetails} product={i} />
                ))
                }
                </Body>
            </Page>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: mockProducts,
        details: mockDetails,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: bindActionCreators(actions.getAll, dispatch),
        getDetails: (id) => bindActionCreators(actions.getDetails, dispatch)(id),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
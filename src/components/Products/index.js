import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actions } from "../../actions";
import Thumbnail from "./Thumbnail";
import Details from "./Details";
import Header from "./Header";
import { Page, Body } from "./Products.style.js";

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
import React from 'react';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import { handleResponse, renderChangePercent } from '../../helpers';
import './Detail.css';

class Detail extends React.Component {
    constructor() {
        super();

        this.state = {
            currency: {},
            loading: false,
            error: null,
        };
    }
    componentDidMount() {
        const currencyId = this.props.match.params.id;

        this.setState({ loading: true });

        console.log('currencyId', currencyId);
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
            .then(handleResponse)
            .then((currency) => {
                console.log('currency', currency);
                this.setState({
                    loading: false,
                    error: null,
                    currency,
                });
            })
            .catch((error) => {
                this.setState ({
                    loading: false,
                    error: error.errorMessage,
                 });
                console.log('error', error);
            });
    }

    render() {
        const { loading, error, currency } = this.state;
        console.log('currency', currency);

        // Render only loading component if loading state is set to true.
        if (loading) {
            return <div className="loading-container"><Loading /></div>
        }

        // Render only error message, if error occurred while fetching data.
        if (error) {
            return <div className="error">{error}</div>
        }

        return (
            <div className="Detail">
                <h1 className="Detail-heading">
                    {currency.name} ({currency.symbol})
                </h1>

                <div     className="Detail-container">
                    <div className="Detail-item">
                        Price <span className="Detail-value">$ {currency.price}</span>
                    </div>
                    <div className="Detail-item">
                        Rank <span className="Detail-value">{currency.rank}</span>
                    </div>
                    <div className="Detail-item">
                        24H Change
                        <span className="Detail-value">{renderChangePercent(currency.percentChange24h)}</span>
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">Market cap</span>
                        <span className="Detail-dollar">$</span>
                        {currency.marketCap}
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">24H Volume</span>
                        <span className="Detail-dollar">$</span>
                        {currency.volume24h}
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">Total supply</span>
                        <span className="Detail-dollar"></span>
                        {currency.totalSupply}
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;
import React from 'react';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';

const GET_COUNTRY = gql`
    query country($code: String!) {
        country(code: $code){
            name
            currency
            phone
        }
    }
`;

export default class Country extends React.Component {
    render() {
        return (
            <Query query={GET_COUNTRY} variables={{ code: this.props.match.params.code }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return `Error! ${error}`;

                    return (
                        <div>
                            <p>{data.country.name}</p>
                            <p>{data.country.currency}</p>
                            <p>{data.country.phone}</p>
                        </div>
                    );
                }}
            </Query>
        )
    }
}

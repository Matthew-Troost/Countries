import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function Countries() {
    const { loading, error, data } = useQuery(gql`
    {
        countries{
            name
            continent{
              name
            }
            languages{
              name
              native
            }
            emoji
          }
    }
  `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching countries :(</p>;

    return data.countries.map((country) => (
        <div key={country.name}>
            <h3>
                {country.name}
            </h3>
            <h4>{country.continent.name}</h4>
            {country.languages.map((language, index) => (
                <div key={index}>
                    <h4>{language.name}</h4>
                    <h4>{language.native}</h4>
                </div>
            ))}

        </div>
    ));
}

export default Countries;
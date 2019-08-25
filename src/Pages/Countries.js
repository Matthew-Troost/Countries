import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_COUNTRIES = gql`
{
    countries{
        name
        code
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
`;

function Countries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching countries :(</p>;

  return data.countries.map((country) => (
    <div key={country.name}>
      <h3>
        <Link to={`/countries/${country.code}`}>
          {country.name}
        </Link>
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
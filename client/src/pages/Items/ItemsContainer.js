import React, { Component } from 'react';
import Items from './Items';
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

import { ALL_ITEMS_QUERY } from '../../apollo/queries';


export default function ItemsContainer() {

  const { data, loading, error } = useQuery(ALL_ITEMS_QUERY, 
    { variables: { id: '1' }});
  // if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  console.log('data: '+ JSON.stringify(data))
    return <Items data={data}/>;
}


// class ItemsContainer extends Component {

//   render() {
//     console.log('data: '+data)
//     return <Items items={data}/>;
//   }
// }

// export default ItemsContainer;

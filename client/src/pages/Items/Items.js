import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Items = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        This is the items page located at <code>/items</code>.
        <h2>{JSON.stringify(props.data)}</h2>
      </p>
    </div>
  );
};

export default withStyles(styles)(Items);

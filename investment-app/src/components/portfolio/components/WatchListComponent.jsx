import React from 'react';

const WatchListComponent = (props) => {
    return (
        <div>
            {props.stock.key}
            {props.stock.price}
        </div>
    );
}

export default WatchListComponent;

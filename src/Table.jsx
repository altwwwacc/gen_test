import React from 'react';
import './Table.css'

const Table = ({data}) => {
    return (
        <div className="Table">
            {data.map(item => (
                <div className="Table__row" key={item.id}>
                    <div className="Table__cell">
                        {item.index + 1}
                    </div>
                    <div className="Table__cell">
                        {item.email}
                    </div>
                </div>
            ))}
            </div>
    );
}

export default Table;

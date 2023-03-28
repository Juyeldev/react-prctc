import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 10;
    const second = 12;
    const result = multiply(first, second)
    const sum = add(first, second);
    return (
        <div>
            <h3>This is shoes Component</h3>
            <p>Price: {result}</p>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default Shoes;
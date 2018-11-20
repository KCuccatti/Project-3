import React from 'react';

const Category = (props) => {
    
    props = {
        "category": [ "Ford", "BMW", "Fiat", "asdfadsf", "sdfsd", "sdfdsf", "sdfdsf" ]
    }


    return (
        <div className="category">
       
            <select id="category">
                {
                    props.category.map((category, index) => (
                        <option>{category}</option>
                    ))
                }
            </select>

        </div>
    )
}

export default Category;

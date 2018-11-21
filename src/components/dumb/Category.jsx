import React from 'react';


const Category = (props) => {
    

    return (
        <div className="category">
            <select id="category">
                {
                    props.category.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Category;

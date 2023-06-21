/* This component is used to render the AutoComplete. It displays the styles of a list of suggested movies of autocomplete */

import React from "react";

const MovieAutoCompleteItem = ({
    title,
    poster,
    onSelectItem,
    isHighlighted
}) => {
    const highlightedStyle = isHighlighted ? { backgroundColor: 'lightgray' } : null;

    return (
        <li
            className={`list-group-item ${isHighlighted ? "active highlighted" : ""
                }`}
            onClick={onSelectItem}
            style={highlightedStyle}
        >
            <div className="row">
                <div className="col text-left">
                    <p className="mb-0 font-weight-bold line-height-1">
                        {title}{" "}
                        <img src={poster} alt="" style={{ width: "10px" }} />
                    </p>
                </div>
            </div>
        </li>
    );
};

export default MovieAutoCompleteItem;

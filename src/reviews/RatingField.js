import * as React from "react";

export const RatingField = ({ source, record = {} }) => {
    return (
        <span>
            {Array.from(Array(record[source]).keys()).map((key) => (
                <span key={key}>*</span>
            ))}
        </span>
    );
};

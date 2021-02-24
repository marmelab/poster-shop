import PropTypes from "prop-types";
import * as React from "react";

export const RatingField = ({ source, record = {} }) => {
    const displayStars = () => {
        const stars = [];
        for (let index = 0; index < record[source]; index++) {
            stars.push(<span>*</span>);
        }
        return stars;
    };

    return <span>{displayStars()}</span>;
};

RatingField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

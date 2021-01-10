import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Rating = ({ value }) => {
  return (
    <div style={{ color: "#ffea00" }}>
      {value >= 1 ? <StarIcon /> : value >= 0.5 ? <StarHalfIcon /> : <StarBorderIcon />}
      {value >= 2 ? <StarIcon /> : value >= 1.5 ? <StarHalfIcon /> : <StarBorderIcon />}
      {value >= 3 ? <StarIcon /> : value >= 2.5 ? <StarHalfIcon /> : <StarBorderIcon />}
      {value >= 4 ? <StarIcon /> : value >= 3.5 ? <StarHalfIcon /> : <StarBorderIcon />}
      {value >= 5 ? <StarIcon /> : value >= 4.5 ? <StarHalfIcon /> : <StarBorderIcon />}
    </div>
  );
};

export default Rating;

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Testimonial = (props) => {
	const { quote, name, from, img } = props.testimonial;
	return (
		<Container className="card shadow-sm">
			<div className="card-body">
      <Typography variant="subtitle1" gutterBottom component="div">
        {quote}
        </Typography>
        </div>
			<Box>
				<img className="mx-3" src={img} alt="" width="60" />
				<div>
        <Typography variant="caption" display="block" gutterBottom>
        {name}
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        {from}
      </Typography>
				</div>
			</Box>
		</Container>
	);
};

export default Testimonial;

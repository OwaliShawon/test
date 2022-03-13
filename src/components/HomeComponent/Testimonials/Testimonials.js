import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import testimonials from "../../../data/testimonials";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";

const Testimonials = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Container>
				<Typography
					variant="h5"
					component="h2"
					mt={5}
					style={{ color: "#5CE7ED" }}
				>
					Testimonials
				</Typography>
				<Typography variant="h3" component="h2" mb={10}>
					What Our Patients Say
				</Typography>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{testimonials.map((testimonial) => (
						<Testimonial testimonial={testimonial} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Testimonials;

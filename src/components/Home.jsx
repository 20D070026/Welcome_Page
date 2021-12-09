import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Welcome Page</h1>
	<br />
	
   
<button>
		
		{/* Endpoint to route to About component */}
		<Link to="/about">Next Page</Link>
		
        </button>
		

	</div>
);
};

export default Home;

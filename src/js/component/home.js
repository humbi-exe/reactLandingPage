import React from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Body from "./body";

//create your first component

export function Home() {
	return (
		<React.Fragment>
			<NavBar />
			<Jumbotron />
			<Body />
		</React.Fragment>
	);
}

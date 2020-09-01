import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import ScrollToTop from "./utils/scrollToTop";

export default function Routes() {
	return (
		<BrowserRouter>
			<>
				<ScrollToTop />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</>
		</BrowserRouter>
	);
}

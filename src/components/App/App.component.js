import React from "react";
import "./App.styles.scss";
import { Header } from "../Header/Header.component";
import { Hero } from "../Hero/Hero.component";
import { ServiceSection } from "../ServiceSection/ServiceSection.component";
import { TechStack } from "../TechStack/TechStack.component";
import { ArticleList } from "../ArticleList/ArticleList.component";
import { Form } from "../Form/Form.component";
import { Footer } from "../Footer/Footer.component";

export function App() {
	return (
		<div className="app">
			<Header />
			<Hero />
			<ServiceSection />
			<TechStack />
			<ArticleList />
			<Form />
			<Footer />
		</div>
	);
}

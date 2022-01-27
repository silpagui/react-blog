import React from "react";
import "./ArticleList.styles.scss";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import { ArticleItem } from "../ArticleItem/ArticleItem.component";

export function ArticleList() {
	return (
		<div className="article content-layout">
			<h2 className="title">Title Here</h2>
			<ul className="article__list">
				<ArticleItem src={img1} alt={"keyboard"} href={"#copy1"} />
				<ArticleItem src={img2} alt={"Computer"} href={"#copy2"} />
				<ArticleItem src={img3} alt={"desktop"} href={"#copy3"} />
			</ul>
		</div>
	);
}

import React from "react";
import "./ArticleItem.styles.scss";

export function ArticleItem({ src, alt, href }) {
  return (
    <li className="article-item">
      <article>
        <img src={src} width="100" alt={alt} />
        <div>
          <h3 className="article-item__title">Title Here</h3>
          <p className="article-item__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis
            parturient montes nascetur ridiculus mus mauris vitae ultricies leo.
            Aliquam sem fringilla ut morbi tincidunt augue. Nibh mauris cursus
            mattis molestie. Volutpat commodo sed egestas egestas fringilla
            phasellus faucibus.
          </p>
          <a href={href} className="article-item__copy">
            Lorem ipsum dolor
          </a>
        </div>
      </article>
    </li>
  );
}

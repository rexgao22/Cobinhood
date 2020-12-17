import React from "react";

const NewsIndex = ({ story }) => (
  <li>
    <a className="news-index" href={story.url} target="_blank">
      <img  src={story.image} />
      <main>
        <h4>{story.site}</h4>
        <h3>{story.title}</h3>
      </main>
    </a>
  </li>
);

export default NewsIndex;

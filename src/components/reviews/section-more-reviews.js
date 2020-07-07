/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Link } from 'gatsby';

import projects from '../../data/reviews';

const findNext = (current, obj) => {
  const key = Object.keys(obj)
    .filter((item) => obj[item] === current)
    .join('');
  const keys = Object.keys(obj);
  const len = Object.keys(obj).length;

  if (keys.indexOf(key) > -1) {
    let nextIndex = (keys.indexOf(key) - 1) % len;
    nextIndex = nextIndex >= 0 ? nextIndex : len - 1;
    var next = keys[nextIndex];
    return obj[next];
  }
};

const findPrev = (current, obj) => {
  const key = Object.keys(obj)
    .filter((item) => obj[item] === current)
    .join('');
  const keys = Object.keys(obj);
  const len = Object.keys(obj).length;

  if (keys.indexOf(key) > -1) {
    let prevIndex = (keys.indexOf(key) + 1) % len;
    prevIndex = prevIndex < len ? prevIndex : 0;
    var prev = keys[prevIndex];
    return obj[prev];
  }
};

const MoreProjects = ({ project }) => {
  const prev = findPrev(project, projects);
  const next = findNext(project, projects);

  return (
    <section className="more-projects">
      <Link
        to={next.url}
        className="more-projects__project more-projects__project--previous"
        style={{
          backgroundImage: `url(${next.images.main.src})`
        }}
      >
        <span className="more-projects__project__title">{next.title}</span>
      </Link>

      <Link
        to={prev.url}
        className="more-projects__project more-projects__project--next"
        style={{
          backgroundImage: `url(${prev.images.main.src})`
        }}
      >
        <span className="more-projects__project__title">{prev.title}</span>
      </Link>
    </section>
  );
};

export default MoreProjects;

import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BlogCardStyleWrap } from './Style';

function BlogCard({ channel, theme }) {
  const { avatarUrl, title, description, username } = channel;
  return (
    <BlogCardStyleWrap>
      <figure className={`ninjadash-blog ninjadash-blog-${theme}`}>
        <div>
          <img src={avatarUrl} alt="Channel Avatar" />
        </div>
        <figcaption>
          <h2 className="ninjadash-blog__title">
            <Link to="#">{title}</Link>
          </h2>
          <p className="ninjadash-blog__text">{description}</p>
          <p className="ninjadash-blog__text">{username}</p>
        </figcaption>
      </figure>
    </BlogCardStyleWrap>
  );
}

BlogCard.propTypes = {
  channel: propTypes.object,
  theme: propTypes.string,
};

BlogCard.defaultProps = {
  channel: {
    id: 1,
    title: 'default channel title',
    avatarUrl: 'default avatar url',
    description: 'default channel description',
  },
  theme: 'style-1',
};

export default BlogCard;

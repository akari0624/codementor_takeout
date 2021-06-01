import React from 'react';
import PropTypes from 'prop-types';
import ArtileItem from 'components/ArticleItem';

function ArticleList({ data }) {
  return (
    <div>
      {data.map((d) => (
        <ArtileItem
          key={d.id}
          id={d.id}
          title={d.title}
          author={d.author_name}
          categories={d.categories}
        />
      ))}
    </div>
  );
}

ArticleList.propTypes = {};

export default ArticleList;

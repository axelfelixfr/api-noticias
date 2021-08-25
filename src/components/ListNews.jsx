import React from 'react';
import { New } from './New';
import PropTypes from 'prop-types';

export const ListNews = ({ news }) => (
  <div className="row">
    {news.map(newItem => (
      <New key={newItem.url} newItem={newItem} />
    ))}
  </div>
);

ListNews.propTypes = {
  news: PropTypes.array.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';

export const New = ({ newItem }) => {
  const { urlToImage, url, title, description, source } = newItem;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {urlToImage && (
          <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">preview</i>
            </a>
          </div>
        )}

        <div className="card-content">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

New.propTypes = {
  newItem: PropTypes.object.isRequired
};

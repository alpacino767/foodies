import React from 'react';
import propTypes from 'prop-types';

function StreamKey({ streamKey }) {
  return <span>{streamKey}</span>;
}

StreamKey.propTypes = {
  streamKey: propTypes.string,
};

export default StreamKey;

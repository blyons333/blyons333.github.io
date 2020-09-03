import * as React from 'react';
import PropTypes from 'prop-types';
import './FallbackComponent.scss';

const FallbackComponent = ({ componentName = 'this information' }) => (
  <div className='fallback-component-div'>
    <p className='error'>
      Error loading {componentName}. Please refresh the
      page to try again.
    </p>
  </div>
);

FallbackComponent.propTypes = {
  componentName: PropTypes.string
}

export default FallbackComponent

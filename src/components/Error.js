import React from 'react';
import PropTypes from 'prop-types';

const Error = ({message}) => {
    return ( 
        <div className="my-3 0-4 text-center alert alert-primary">
            <p>{message}</p>
        </div>
     );
}

Error.propTypes = {
    message: PropTypes.string.isRequired,
}
 
export default Error;
import React from 'react';

import PropTypes from 'prop-types';

const UserItem = (props) => {
    (
        <div>
            <p>
                {props.user.name}
            </p>
            <span>
                {props.user.gender}
            </span>
        </div>
    );
};


UserItem.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
    }).isRequired,
};

export default UserItem;

import React from 'react';

import MyContext from '../context/index';

function withContext(Component) {
    return props =>
        (
            <MyContext.Consumer>
                {context => <Component {...props} context={context} />}
            </MyContext.Consumer>
        );
}

export default withContext;

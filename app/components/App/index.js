import React, { PropTypes } from "react";

const App = ({ children }) => (
    <div>
        {children}
    </div>
);

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default App;

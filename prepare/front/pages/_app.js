import PropTypes from "prop-types";

const App = ({ Component }) => {
    return <Component />;
};

App.PropTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;

import PropTypes from 'prop-types';

const Card = ({ children }) => {
    return (
        <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-4">{children}</div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;

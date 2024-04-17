import PropTypes from 'prop-types';

const Card = ({ children, bg = 'bg-gray-100' }) => {
    return (
        <div className={`${bg} p-6 mb-4 rounded-lg shadow-md`}>{children}</div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;

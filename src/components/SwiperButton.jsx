import PropTypes from 'prop-types';
const SwiperButton = ({onClick, to}) => {
    return (
        <button
            className="btn btn-secondary btn-sm text-xs md:btn-md border border-primary-content hidden lg:block"
            onClick={onClick}
        >
            <img src={`/arrow-${to}.svg`} alt="left arrow" width={30} />
        </button>
    );
};

export default SwiperButton;

SwiperButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
}

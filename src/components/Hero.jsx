import PropTypes from 'prop-types'; // Import PropTypes

const Hero = (props) => {
    return (
        <section className='bg-indigo-700 py-20 mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
                        {props.title}
                    </h1>
                    <p className='my-4 text-xl text-white'>{props.subtitle}</p>
                </div>
            </div>
        </section>
    );
};

// Add prop type validation
Hero.propTypes = {
    title: PropTypes.string.isRequired, // Ensure title is a required string
    subtitle: PropTypes.string.isRequired, // Ensure subtitle is a required string
};

export default Hero;

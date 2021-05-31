import PropTypes from 'prop-types';

function Input({ register, name }) {
  return (
    <input
      type="text"
      {...register(name, {
        required: true,
      })}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  resister: PropTypes.func.isRequired,
};

export default Input;

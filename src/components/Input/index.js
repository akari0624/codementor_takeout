import PropTypes from 'prop-types'

function Input({ register, name, onChange }) {
  const {name: rName, ref} = register(name)
  return (
    <input
      type="text"
      name={rName}
      ref={ref}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

export default Input

import PropTypes from 'prop-types'

export default function Name({name}) {
  return (
    <h1 className='text-xl flex-1 font-semibold'>{name}</h1>
  )
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
}
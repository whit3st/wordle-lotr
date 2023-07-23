import PropTypes from 'prop-types';
const CharactersContainer = ({children}) => {
  return (
    <div className="flex flex-col gap-3 my-10 w-full px-5">
      {children}
    </div>
  )
}

export default CharactersContainer

CharactersContainer.propTypes = {
  children: PropTypes.node
}
import PropTypes  from 'prop-types'

const Button = ({ text , color }) => {
  const onClick = () => {
      console.log('Clicked');
  }

  return <button onClick = {onClick}  style ={{backgroundColor:color }} className='btn'>{text}</button>
}

Button.defaultProps = {
color :'steelblue'
}

Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
}


export default Button

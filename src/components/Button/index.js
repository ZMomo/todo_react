import './index.css';

const Button = ({ texte, ...rest }) => {
    return ( 
        <button  {...rest} className='button'>
            {texte}
        </button>
     );
}
 
export default Button;
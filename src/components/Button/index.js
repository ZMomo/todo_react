import './index.css';

const Button = ({ texte }) => {
    return ( 
        <button className='button'>
            {texte}
        </button>
     );
}
 
export default Button;
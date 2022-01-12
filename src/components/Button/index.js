import './index.css';

const Button = ({ texte, ...rest }) => {    // ...rest -> utilisation du spread operator "..." afin de récupérer toutes les props restantes
    return ( 
        <button  {...rest} className='button'>  {/* Ici on applique les props restantes "...rest" */}
            {texte}
        </button>
     );
}
 
export default Button;
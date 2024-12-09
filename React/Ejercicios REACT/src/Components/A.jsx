const A = ({cuanto, amor, children}) => {
    return (
        <div>
           <p> hola, {amor} {cuanto}</p>
           {children}
        </div>
    );
};
// Children es el contenido de la equiqueta
export default A;
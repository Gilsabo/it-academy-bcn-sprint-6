import StylesScreenButtons from "./StyledScreenButtons";

 
const ScreenButtons = () => {

    const handleClickAnterior = () =>{
        alert ('hello');
    }

    const handleCLickSegüent = () => {
        alert ('adéu');
    }

    return (
        <>
            <StylesScreenButtons onClick = {handleClickAnterior}>Anterior</StylesScreenButtons>
            <StylesScreenButtons onClick={handleCLickSegüent}>Següent</StylesScreenButtons>
        </>
    );
}
 
export default ScreenButtons;
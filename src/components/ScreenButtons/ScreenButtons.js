import StylesScreenButtons from "./StyledScreenButtons";

const ScreenButtons = ({ paintAnterior, paintSeguent }) => {
  return (
    <>
      <div>
        <StylesScreenButtons onClick={paintAnterior}>
          Back
        </StylesScreenButtons>
        <StylesScreenButtons onClick={paintSeguent}>
          Next
        </StylesScreenButtons>
      </div>
    </>
  );
};

export default ScreenButtons;

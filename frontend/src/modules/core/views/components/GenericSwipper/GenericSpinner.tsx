import SpinnerWrapper from "./SpinnerWrapper";

const GenericSpinner = () => {
  return (
    <SpinnerWrapper>
      <div className="spinner-event">
        <div className="content">
          <div className="spinner" />
          <span className="title">Loading...</span>
        </div>
      </div>
    </SpinnerWrapper>
  );
};

export default GenericSpinner;

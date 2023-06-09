import SpinnerWrapper from './SpinnerWrapper';

const GenericSpinner = () => {
  return (
    <SpinnerWrapper>
      <div className="spinner-event">
        <div className="content">
          <div className="spinner" />
        </div>
      </div>
    </SpinnerWrapper>
  );
};

export default GenericSpinner;

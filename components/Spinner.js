import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({loading}) => {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <ClipLoader
      color={"cyan"}
      loading={loading}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;

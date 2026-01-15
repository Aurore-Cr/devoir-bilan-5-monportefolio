import ProgressBar from "react-bootstrap/ProgressBar";

function Competence() {
  return (
    <div className="text-uppercase size-xsmall p-4 bg-light rounded-3">
      <div className="mb-4 ">
        <h3 className="">html5 90%</h3>
        <ProgressBar variant="danger" now={90} />
      </div>
      <div className="mb-4">
        <h3 className="">css3 80%</h3>
        <ProgressBar variant="info" now={80} />
      </div>
      <div className="mb-4">
        <h3 className="">javascript 70%</h3>
        <ProgressBar variant="warning" now={70} />
      </div>
      <div className="mb-4">
        <h3 className="">php 60%</h3>
        <ProgressBar variant="success" now={60} />
      </div>
      <div className="mb-4">
        <h3 className="">react 50%</h3>
        <ProgressBar variant="primary" now={50} />
      </div>
    </div>
  );
}

export default Competence;

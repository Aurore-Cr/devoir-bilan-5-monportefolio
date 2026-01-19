import ProgressBar from "react-bootstrap/ProgressBar";

const Competence = () => {
  return (
    <>
      <p className="mb-1">HTML5 90%</p>
      <ProgressBar variant="danger" now={90} className="mb-2" />

      <p className="mb-1">CSS3 80%</p>
      <ProgressBar variant="info" now={80} className="mb-2" />

      <p className="mb-1">JavaScript 70%</p>
      <ProgressBar variant="warning" now={70} className="mb-2" />

      <p className="mb-1">PHP 60%</p>
      <ProgressBar variant="success" now={60} className="mb-2" />

      <p className="mb-1">React 50%</p>
      <ProgressBar variant="primary" now={50} />
    </>
  );
};

export default Competence;

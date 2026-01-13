function Modal(dataGitHub) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button">&times;</span>)<h2>{dataGitHub.name}</h2>
        <p>{dataGitHub.description}</p>
        <a href={dataGitHub.html_url} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
}
export default Modal;

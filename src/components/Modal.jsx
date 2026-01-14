import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Modal1(dataGitHub) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button">&times;</span>
        <h2>{dataGitHub.name}</h2>
        <p>{dataGitHub.description}</p>
        <a href={dataGitHub.html_url} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
}
export default Modal1;

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

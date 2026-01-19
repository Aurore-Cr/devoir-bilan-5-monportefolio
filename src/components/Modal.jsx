import { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Spinner } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const GithubModal = ({ show, handleClose }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show) {
      fetch("https://api.github.com/users/github-john-doe")
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="bg-dark text-light"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          profile && (
            <Row className="gy-4 align-items-center">
              {/* Avatar */}
              <Col
                xs={12}
                md={5}
                className="text-center d-flex justify-content-center"
              >
                <img
                  src={profile.avatar_url}
                  alt={profile.login}
                  className="img-fluid rounded"
                  style={{ maxWidth: "220px" }}
                />
              </Col>

              {/* Infos */}
              <Col xs={12} md={7}>
                <p className="border-bottom pb-2">
                  <i className="bi bi-person me-2"></i>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    {profile.name || profile.login}
                  </a>
                </p>

                <p className="border-bottom pb-2">
                  <i className="bi bi-geo-alt me-2"></i>
                  {profile.location || "Non renseigné"}
                </p>

                <p className="border-bottom pb-3">
                  <i className="bi bi-card-text me-2"></i>
                  {profile.bio || "Aucune biographie disponible."}
                </p>

                <p>
                  <i className="bi bi-box me-2"></i>
                  Repositories : {profile.public_repos}
                </p>

                <p>
                  <i className="bi bi-people me-2"></i>
                  Followers : {profile.followers}
                </p>

                <p>
                  <i className="bi bi-people me-2"></i>
                  Following : {profile.following}
                </p>
              </Col>
            </Row>
          )
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GithubModal;

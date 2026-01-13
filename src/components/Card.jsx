import Card from "react-bootstrap/Card";
/* 
const Prestations = () => {
  return (
    <div>
      {Contenu des prestations }
      <h1>Contenu des prestations</h1>
      <p>Voici les prestations sur lesquelles je peux intervenir</p>
    </div>
  );
};
*/

function Prestations() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Prestations;

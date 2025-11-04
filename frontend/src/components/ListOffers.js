import { useEffect, useState } from "react";
import { getOffers, createOffer } from "../services/api";
import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap';



function ListOffers ()
{
    const [offers,setOffers] = useState([]);
    const [offer,setOffer] = useState({title: "", pickupLocation: "", pickupDateTime: "", returnLocation:"",
                                        mobilityService:"",price:"",createdBy:""})

    const handleChange = (e)=>{
      setOffer({...offer, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      createOffer(offer)
        .then(()=> alert("Offre ajoutée avec succès"))
        .catch(() => alert("Erreur lors de l'ajout de l'offre!"))
    }
    useEffect(()=>{
        getOffers()
        .then((res)=>setOffers(res.data))
    }, []);

  return (
    <Container className="py-4">
      <h2 className="mb-4">Ajouter Nouvelle Offre</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                name="title"
                placeholder="Titre"
                value={offer.title}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="pickupLocation">
              <Form.Label>Lieu de prise en charge</Form.Label>
              <Form.Control
                name="pickupLocation"
                placeholder="Lieu de prise en charge"
                value={offer.pickupLocation}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="pickupDateTime">
              <Form.Label>Date et heure de prise en charge</Form.Label>
              <Form.Control
                type="datetime-local"
                name="pickupDateTime"
                value={offer.pickupDateTime}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="returnLocation">
              <Form.Label>Lieu de retour</Form.Label>
              <Form.Control
                name="returnLocation"
                placeholder="Lieu de retour"
                value={offer.returnLocation}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="mobilityService">
              <Form.Label>Service de mobilité</Form.Label>
              <Form.Control
                name="mobilityService"
                placeholder="Service de mobilité"
                value={offer.mobilityService}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="price">
              <Form.Label>Prix (€)</Form.Label>
              <Form.Control
                name="price"
                placeholder="Prix"
                value={offer.price}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="createdBy">
          <Form.Label>Créé par</Form.Label>
          <Form.Control
            name="createdBy"
            placeholder="Créé par"
            value={offer.createdBy}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Ajouter
        </Button>
      </Form>

      <h2 className="mt-5">Liste des Offres</h2>
      {offers.length === 0 ? (
        <p>Aucune offre trouvée</p>
      ) : (
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Lieu de prise en charge</th>
              <th>Lieu de retour</th>
              <th>Service de mobilité</th>
              <th>Prix (€)</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, index) => (
              <tr key={offer.id}>
                <td>{index + 1}</td>
                <td>{offer.pickupLocation}</td>
                <td>{offer.returnLocation}</td>
                <td>{offer.mobilityService}</td>
                <td>{offer.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default ListOffers;
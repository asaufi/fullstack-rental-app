import { useEffect, useState } from "react";
import { getOffers } from "../services/api";



function ListOffers ()
{
    const [offers,setOffers] = useState([]);


    useEffect(()=>{
        getOffers()
        .then((res)=>setOffers(res.data))
    }, []);

    return (
    <div style={{ padding: "20px" }}>
      <h2>Liste des offres</h2>
      {offers.length === 0 ? (
        <p>Aucune offre trouvée</p>
      ) : (
        <ul>
          {offers.map((offer) => (
            <li key={offer.id}>
              {offer.pickupLocation} → {offer.returnLocation} ({offer.mobilityService}) - {offer.price}€
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListOffers;
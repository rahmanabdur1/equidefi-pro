import React from "react";
import "./ClientReview.css";
import img1 from "../../assets/facesArtboard-1-copy.png";
import img2 from "../../assets/facesArtboard-1.jpg";
import img3 from "../../assets/facesArtboard-2.png";
const ClientReview = () => {
  return (
    <div className="clientreview-container">
      <div className="clients-reviews">
        <div className="client">
          <div className="client-img">
            <img src={img1} alt="img" />
          </div>
          <div className="review">
            <p>
              “We love the simple styling and organization of the dashboard. We
              are able to see subscriptions as they arrive in real time, watch
              funding progress and select subscribers to close, all from one
              simple dashboard. The attention to detail is everywhere.”{" "}
            </p>
            <div className="name">
              <span>Tom Pruter</span>
              <span>Freshies Tequila Selzer</span>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="client-img">
            <img src={img2} alt="img" />
          </div>
          <div className="review">
            <p>
              “We used EquiDeFi for a recent private offering and we recommend
              it to companies for handling their offering subscription process.”
            </p>
            <div className="name">
              <span>Robert Steele, CEO</span>
              <span>Thumzup Media Corporation</span>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="client-img">
            <img src={img3} alt="img" />
          </div>
          <div className="review">
            <p>
              “The EquiDeFi® team has made a significant and much needed
              improvement to private placement workflows that will expand our
              ability to service our client’s legal needs and reduce the time
              and costs locating lost documents and records.”
            </p>
            <div className="name">
              <span>Michael Harris, Esq</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;

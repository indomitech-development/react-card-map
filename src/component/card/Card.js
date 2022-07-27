import React from "react";
import { Data } from "../../constant/data/Data";

export default function Card() {
  const [card, setCard] = React.useState(Data);
  return (
    <div className="container">
      <div className="row">
        {card.map((item, index) => {
          return (
            <div
              className="card ms-5 mt-3"
              style={{
                width: "20rem",
                height: "575px",
                border: "1px solid black",
              }}
            >
              <div className="card-body">
                <h2 className="card-title">{item.Card_Title}</h2>
                <h3>{item.Card_Name}</h3>
                <p>{item.Card_PackageI}</p>
                <p>{item.Card_PackageII}</p>
                <p>{item.Card_PackageIII}</p>
                <p>{item.Card_PackageIV}</p>
                <h1>{item.Rupees}</h1>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <img src={item.src} className="card-img" alt="..." />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React , { useContext }from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {

  const { store } = useContext(Context);
  
      const handleOnError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
      };

      return (
        <div className="container-fluid d-flex flex-column">
          <h1 style={{ color: "red", textAlign: "left", margin: "60px" }}>Characters</h1>
          <div className="row m-3">
            {store.users.map((item, index) => (
              <div key={index} className="card m-3 col-sm-4 col-md-3 col-lg-2">
                <div className="card-body h-100 w-100">
                  <img
                    className="card-img-top m-auto"
                    src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                    onError={handleOnError}
                    style={{ width: "200px" }}
                    alt="Card image"
                  /> 
                  <div className="card-body">
                      <h4 className="card-title">{item.name}</h4>

                  </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
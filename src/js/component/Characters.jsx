import React , { useContext }from "react";



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
                <div className="card bg-light h-100">
                  <img
                    className="card-img-top m-auto"
                    src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                    onError={handleOnError}
                    style={{ width: "200px" }}
                    alt="Card image cap"
                  />
                  <div>
                    <div className="card-body">
                      <h5 className="card-title text-dark">{item.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
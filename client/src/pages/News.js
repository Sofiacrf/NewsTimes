import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../components/style.css";
import { validateOperation } from "@apollo/client/link/utils";

function News() {
  const [data, setData] = useState([]);

  // Fetching Data from API
  const showNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=mx&pageSize=6&apiKey=7f69ce2de7f443b8b756ea57b6f8fcad"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };

  // Displaying Modal When Succeded
  const successModal = () => {
    Swal.fire({
      position: 'top drawer',
      icon: 'success',
      padding: '3em',
      title:
        '<h3 style="color:#263d5b"> La noticia ha sido agregada a favoritos </h3>',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <section className="col-lg-8 mx-auto p-3 py-md-5">
      <div className="container">
        <button className="btn btn-warning btn-lg" onClick={showNews}>
          Muéstrame las noticias
        </button>
      </div>

      <div className="container">
        <div className="row gy-4">
            {
                data.map((value) => {
                    return (
                        <div className="col-sm card-position">
                        <div className="card h-100" style={{width: "18rem"}} key={value.id}>
                          <img src={value.urlToImage} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{value.title}</h5>
                            <p className="card-text">
                             {value.description}
                            </p>
                            <a onClick={successModal} class="btn btn-outline-warning">
                              Add to favorites
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
}

export default News;

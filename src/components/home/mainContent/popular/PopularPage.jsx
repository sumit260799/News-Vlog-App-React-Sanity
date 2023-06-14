import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../../../lib/sanity";
function PopularPage() {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState([]);
  const [item, setItem] = useState([]);
  //   console.log(dataItem);
  useEffect(
    () => {
      client
        .fetch('*[_type == "popular"]') // Replace 'yourContentType' with your actual content type name
        .then((result) => setDataItem(result))
        .catch((error) => console.error(error));
    },
    [],
    [id]
  );
  const findUser = (id) => {
    const newItem = dataItem.find((itemdata) => itemdata._id === id);
    if (newItem) {
      return setItem([newItem]);
    }
  };

  useEffect(() => {
    findUser(id);
  }, [dataItem]);
  //   console.log(item);
  return (
    <>
      {item.map((item) => {
        {
          /* console.log(item); */
        }
        return (
          <main>
            <div key={item._id} className="container">
              <section className="mainContent details">
                <h1 className="title">{item.title}</h1>
                <img
                  className="coverImg"
                  src={urlFor(item.coverImage)}
                  alt=""
                />
                <div className="desctop">
                  <p> {item.description}</p>
                </div>

                <div className="author">
                  <label>{item.date}</label>
                </div>
              </section>
            </div>
          </main>
        );
      })}
    </>
  );
}

export default PopularPage;

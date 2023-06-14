import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../../../lib/sanity";
import { BsCalendarCheck, BsPeople } from "react-icons/bs";

function SingleSocial() {
  const { id } = useParams();
  console.log(id);
  const [dataItem, setDataItem] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(
    () => {
      client
        .fetch('*[_type == "socialpost"]') // Replace 'yourContentType' with your actual content type name
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
  console.log(item);
  return (
    <>
      {item.map((item) => {
        return (
          <main key={item._id}>
            <div className="container">
              <section className="mainContent details">
                <h1 className="title">{item.title}</h1>
                <img
                  className="coverImg"
                  src={urlFor(item.socialImage)}
                  alt=""
                />
                <div className="desctop">
                  <p> {item.description}</p>
                </div>

                <div className="author">
                  <label>
                    {" "}
                    <BsPeople className="peopleicon" />
                    {item.author} on{" "}
                  </label>
                  <label>
                    {" "}
                    <BsCalendarCheck className="peopleicon date2" />
                    {item.date}
                  </label>
                </div>
              </section>
            </div>
          </main>
        );
      })}
    </>
  );
}

export default SingleSocial;

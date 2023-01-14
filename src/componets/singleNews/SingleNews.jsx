import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../common/header/Header";

export default function SingleNews() {
  const location = useLocation();
  const { singleNews } = location.state;

  return (
    <>
    <Header />
      <div className="container row my-4 mx-auto px-md-5">
        <div className=" col-10 col-md-8 mx-auto">
          <div className="">
            <img
              className="w-100"
              src={singleNews.urlToImage}
              alt="singleNews image"
            />

          </div>
          <div className="p-4">
            <h3
              className="my-3"
              style={{
                color: "#097969",
              }}
            >
              {singleNews.title}
            </h3>
            <p style={{ color: "#818181" }}>{singleNews.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

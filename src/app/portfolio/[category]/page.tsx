import React from "react";
import { items } from "./data";
import "./style.scss";
import Image from "next/image";
const item: any = items;
const getData = (cat: any) => {
  const data: any = item[cat];
  if (data) {
    return data;
  }
};
const Category = ({ params }: any) => {
  const data = getData(params.category);
  return (
    <div className="category-wrapper">
      <div className="category-container">
        <div className="category-content">
          {data.map((ele: any) => {
            return (
              <div className="category-data-wrapper" key={ele.id}>
                <div className={ele.id%2==0?'category-data-content-rev':'category-data-content'}>
                <div className="category-data-text">
                  <h1>{ele.title}</h1>
                  <p style={{textAlign:"justify"}}>{ele.desc}</p>
                  <button>See More</button>
                </div>
                <div className="category-data-image">
                  <Image className="category-data-img" src={ele.image} alt="" width={600} height={500} />
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};
export default Category;

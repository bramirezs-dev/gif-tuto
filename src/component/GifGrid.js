import React from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGIfs } from "../hooks/useFetchGIfs";
import { GrifGirdItem } from "./GrifGirdItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGIfs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GrifGirdItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifGrid;

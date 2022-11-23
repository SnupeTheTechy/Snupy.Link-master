import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShortUrlFront() {
  const [longUrl, setLongUrl] = useState("");
  const params = useParams().shortUrl;
  console.log(params);

  const getLongUrl = async () => {
    await axios.get(`/gen/${params}`);
  };

  getLongUrl();

  return <div>ShortUrlFront: {params}</div>;
}

export default ShortUrlFront;

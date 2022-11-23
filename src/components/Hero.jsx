import React, { useState, useRef } from "react";
// import dotenv from "dotenv";

import "./Hero.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./Button";

function Hero() {
  // dotenv.config();
  const urlTextRef = useRef();
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleUrlInput = async (e) => {
    e.preventDefault();
    const urlText = urlTextRef.current.value;
    var data = {
      domain: "snupy.link",
      originalURL: urlText,
    };

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-Type": "application/json",
        Authorization: process.env.REACT_APP_SHORTIO_API_KEY,
      },
      body: JSON.stringify(data),
    };

    fetch("https://api.short.io/links/public", options)
      .then((response) => {
        setGenerated(true);
        return response.json();
      })
      .then((response) => {
        console.log(response);
        const generatedUrl = response.shortURL;
        setUrl(generatedUrl);
        urlTextRef.current.value = "";
      })
      .catch((error) => console.log(error));
  };

  // const options = {
  //   method: "POST",
  //   headers: {
  //     accept: "application/json",
  //     "content-type": "application/json",
  //     Authorization: "pk_Ic6ANzlLNrnWeagQ",
  //   },
  // };

  // fetch("https://api.short.io/links/public", options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  // const urlText = urlTextRef.current.value;
  // const response = await axios.post("https://api.short.io/links", {
  //   originalURL: urlText,
  // });
  // setUrl(response.data.shortURL);
  // console.log(url);
  // e.preventDefault();
  // const urlText = urlTextRef.current.value;
  // setLongUrl(urlText);
  // const response = await axios.post("/shortenUrl", { longUrl: urlText });

  // if (response.data) {
  //   const savedShortUrl = response.data.shortUrl;
  //   // setUrl(savedShortUrl);
  //   setGenerated(true);
  //   console.log(savedShortUrl);
  // }
  // await axios
  //   .get("/shortUrls", {
  //     crossDomain: true,
  //   })
  //   .then((response) => {
  //     const generatedUrl = response.data;
  //     const recentUrl = generatedUrl[generatedUrl.length - 1].shortUrl;
  //     const displayedUrl = recentUrl;
  //     setUrl(displayedUrl);
  //   });

  // urlTextRef.current.value = "";

  const copyToClipboard = () => {
    setCopied(true);
    alert("Copied to clipboard");
  };

  return (
    <div className="hero-container">
      <div className="left-hero">
        <div className="intro-text">
          <span>The Shorter, The Sleeker. Let's Create!</span>
        </div>
        <div className="hero-heading">
          <h1>
            The Most Effective Way To Share Those <span>Links</span>
          </h1>
        </div>
        <div className="hero-paragraph">
          <p>
            If you wanna share a link, you should make it beautiful and easy to
            remember. Right?
          </p>
        </div>

        <form onSubmit={handleUrlInput} className="link-form">
          <input
            required
            ref={urlTextRef}
            type="text"
            placeholder="Enter your link here"
            name="fullUrl"
            id="fullUrl"
          />
          <button type="submit">Create My Link</button>
        </form>

        <div className="outro-text">
          <p>It's free to use and always will be.</p>
        </div>
        {generated && (
          <div className="url-generated">
            <p>This is your short URL</p>
            <span className="bounce-in-top">
              <Link className="link-gen">{`${url}`}</Link>
            </span>
            <CopyToClipboard text={url} onCopy={copyToClipboard}>
              <button className="copy-btn">Copy Now!</button>
            </CopyToClipboard>
          </div>
        )}
      </div>
      <div className="right-hero">
        <div className="hero-image vibrate-1">
          <img
            src="https://images.pexels.com/photos/3756858/pexels-photo-3756858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

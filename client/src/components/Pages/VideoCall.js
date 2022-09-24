import React, { useEffect } from "react";
import axios from "axios";
import apiServer from '../../config/apiServer'
import scroll from '../../css/scroll.css'
export default function Video({ match }) {
  const id = match.params.id;

  useEffect(() => {
    const domain = "https://taskmanager-team.daily.co/";

    apiServer
      .get(`/room/video-call/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const script = document.createElement("script");
          script.innerHTML = `window.DailyIframe.createFrame({
            iframeStyle: {
              position: "absolute",
              width: "100vw",
              height: "100vh",
              border: "0",
              zIndex: 9999
            },
            showLeaveButton: true,
            showFullscreenButton: true,
          }).join({
            url: "${domain}${id}",
          });`;

          document.body.appendChild(script);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <div>
    <div id="scroll-wrapper">
      <div id="scroll-wrapper-inner">
        <div id="scroll-title">
          Scroll
        </div>
        <div id="scroll-down">
        </div>
      </div>
    </div>

    <a href="#demo">
      <div class="box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  </div>;
}

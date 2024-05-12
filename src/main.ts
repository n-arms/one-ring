import { render } from 'preact';
import { Dialogue } from './dialogue';

// in milliseconds
const TIMEOUT = 1000 * 60;

function main() {
  console.log("Attatched YouTube Shorts time monitor");

  let shortsTime = 0;
  let lastCheck = Date.now();

  const interval = setInterval(() => {
    const url = window.location.href;
    const now = Date.now();
    if (url.match("https://www.youtube.com/shorts/.*")) {
      shortsTime += now - lastCheck;
    }
    lastCheck = now;
    if (shortsTime > TIMEOUT) {
      timeout();
      clearInterval(interval);
    }
  }, 100);
}

function timeout() {
  console.log("YouTube Shorts timeout");
  const root = document.createElement("div");
  const content = document.getElementById("content");
  if (!content) throw new Error("Missing Content");
  let video = document.querySelector("video");
  if (!video) throw new Error("Missing Video Element");
  video.pause();
  video.removeAttribute('src');
  video.load();
  const realRoot = document.querySelector("body");
  if (!realRoot) throw new Error("Missing Body Element");

  const toRemove = document.querySelector("ytd-app");
  if (!toRemove) throw new Error("Missing ytd-app element");
  toRemove.remove();

  realRoot.appendChild(root);
  const app = Dialogue(null);
  render(app, root);
  content.remove();
}

main();

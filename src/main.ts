import { render } from 'preact';
import { Dialogue } from './dialogue';

function main() {
  console.log("Omg its Youtube!");
}

main();

const article = document.getElementById("content");

const root = document.createElement("div");
setTimeout(() => {
  if (article) {
    let video = document.querySelector("video");
    if (!video) throw new Error("Missing Video Element");
    video.pause();
    video.removeAttribute('src');
    video.load();
    const realRoot = document.querySelector("body");
    if (!realRoot) throw new Error("Missing Body Element");
    realRoot.childNodes.forEach(node => {
      console.log("removing node ", node);
      realRoot.removeChild(node);
    })
    realRoot.appendChild(root);
    const app = Dialogue(null);
    render(app, root);
    article.remove();
  } else {
    console.log("no video found");
  }
}, 1000);

import { ClassAttributes, h } from 'preact';

export function Dialogue(props: ClassAttributes<HTMLInputElement> | null) {
  return h('div', { id: 'root' }, DialogueStyle(props), h('div', { id: 'outerDiv' }, h('div', { id: 'innerDiv' },
    ...DialogueMessage(props)
  )));
}

function DialogueStyle(props: ClassAttributes<HTMLInputElement> | null) {
  return h("style", null, `
      html {
        min-height: 100%;
        padding: 0;
        margin: 0;
      }
      body {
        min-height: 100vh;
        padding: 0;
        margin: 0;
      }
      #outerDiv {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100vh;
      }
      #innerDiv {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        max-width: 50vw;
      }
      h1 {
        font-size: 7em;
      }
      p {
        font-size: 3em;
      }
    `);
}

function DialogueMessage(props: ClassAttributes<HTMLInputElement> | null) {
  return [
    h("h1", null, "You're Timed Out"),
    h("p", null, "You've spent 5 minutes on YouTube shorts. You could have spent that time taking care of yourself.")
  ];
}

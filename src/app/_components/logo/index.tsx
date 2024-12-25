import React, { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 128 24" {...props} fill="none">
      <path
        fill="var(--B12)"
        d="M0 7.3C.2 6 2.3 2.1 3.3.3l.4 5.2c.1.3.7 1.3 2.1 2.5 1.5 1.1 3.4.8 4.2.5l2.2-.5L15 9c1.4.4 3.3-1.2 4-2l1-1.8-.6-.3c.6-.3 1-3.4 1.1-4.9L25 7l-.3 1-.3-.7-1.2 4.7c0 .2-.3.1-.3 0l-2.6 5v-.7l-3.9 3.9v-.7l-4.6 2.1-3.7-2v.6c-.6.3-3.7-3.2-5.2-5v1.1c-.6-.5-1.1-3-1.3-4.3l-.3 1A29 29 0 0 1 .5 10c-.4-1.7.1-2.7.4-3l-.9.4Z"
      />
      <path
        fill="var(--B12)"
        d="M8.3 4.7c-1 1.8-3 .9-4 .2 0 .2 0 .6.3 1 .4.5.8.7 1.2 1 .2.3.9.6 1.2.7h1.7l.7-.3 1.4-.7 1.2-.5c.4.6 3 1.4 3.3 1.5l1.2-.1c1.4 0 1.8-.9 2-.9l1-1.6-1 .6c-.6.2-1.7.2-2.1-.1l-1.1-.8c-.3-.3-1.2-.7-1.8-.8-.7 0-1.4.4-1.6.6 0-.4-1-.5-1.4-.6-.1-.2-1.5.4-2.2.8ZM125.2 7.2c-.3 0-.5.1-.8.4V11l2 .5-.4 1h-5.2v-1l1.2-.9V7.8l-1.2-.7v-.8l2.9-1.2.5 1.4 1.1-1.2h.7c.5 0 1 0 1.3.3.3.2.6.5.7.9l-1.4 1.7h-.9l-.1-.7c0-.2-.2-.3-.4-.3ZM119.7 12.4h-3.1v-1.1l-1.5 1.2h-.7c-.8 0-1.5-.1-1.8-.6-.4-.4-.6-.9-.6-1.5 0-.3 0-.7.3-1l.9-1h3.4c0-.4-.2-.8-.4-1-.3-.2-.6-.3-1-.3-.6 0-1.4.2-2.5.6l-.4-.8 1.8-1.5 1.6-.2c1 0 1.9.3 2.4.7.6.5.9 1.2.9 2V11l1.2.5-.5 1Zm-4.5-1.8c.4 0 .9-.2 1.4-.5v-.7h-2a1 1 0 0 0-.2.6c0 .2 0 .3.2.4.1.2.3.2.6.2ZM110.8 12.4h-3.1V8.1c0-.3 0-.6-.2-.7 0-.1-.2-.2-.5-.2a2 2 0 0 0-1.1.4V11l1 .4-.4 1h-3V8c0-.3 0-.6-.2-.7l-.5-.2a2 2 0 0 0-1.1.4V11l1 .4-.4 1H98v-1l1.2-.9V7.8L98 7.1v-.8L101 5l.5 1.5 1.5-1.3h.7c.6 0 1 0 1.3.3.4.2.6.5.8 1l1.4-1.3h.8c.6 0 1.2.1 1.5.5.4.3.6.8.6 1.4v4l1.2.2-.5 1ZM97.2 12.4h-5.1v-.8l1.5-.8-.8-1.8h-4l-.6 1.5 2 1-.5 1h-4.3v-.9l1.5-1 3.2-8 2.6-.7 3.6 9 1.4.6-.5 1ZM91 4.1 89.3 8h3L91 4ZM81.1 12.5h-3v-1l-1.3 1a4 4 0 0 1-1 0A2.8 2.8 0 0 1 73 11a4 4 0 0 1-.3-1.8c0-.7.2-1.3.7-1.9.4-.6 1-1 1.7-1.4.6-.4 1.3-.6 2-.6.3 0 .5.1.8.3V3.7L76.8 3v-.8L79.5 1h1v10.1l1.1.4-.5 1Zm-4.5-1.9c.5 0 1 0 1.4-.3V8c0-.3-.2-.5-.5-.7a2 2 0 0 0-1.1-.3c-.7 0-1 .5-1 1.6 0 .6 0 1.1.3 1.5.2.4.5.6 1 .6ZM71.4 12.4h-3v-1l-1.4 1a3 3 0 0 1-.9.2c-.7 0-1.2-.2-1.6-.5-.4-.4-.6-1-.6-1.5V7.9l-1.2-.7v-.8l2.7-1.2h.9v4.3c0 .4 0 .7.2.8 0 .2.3.3.6.3.4 0 .8-.1 1.2-.4V8l-1.1-.7v-.8l2.6-1.2h1v6l1.1.3-.5 1ZM58.5 5.2c.6 0 1.2.2 1.8.5.5.3.9.7 1.2 1.2.3.6.4 1.1.4 1.8s-.2 1.3-.7 2a5 5 0 0 1-3.7 1.9c-.6 0-1.2-.2-1.7-.5a3.3 3.3 0 0 1-1.7-3c0-.7.2-1.3.7-2 .4-.5 1-1 1.7-1.3.7-.4 1.3-.6 2-.6ZM57.7 7c-.3 0-.6.1-.7.4-.2.3-.3.7-.3 1.2 0 .7.2 1.3.4 1.8.3.4.7.6 1.2.6.3 0 .6-.1.7-.4.2-.3.3-.7.3-1.2 0-.7-.1-1.3-.4-1.8-.3-.4-.7-.6-1.2-.6ZM52.8 12.4h-4.3v-.8l1.2-1V3.7L48.5 3v-.8L51.2 1h.9v10.1l1.2.4-.5 1ZM47.6 12.4h-4.3v-.8l1.2-1V7.8L43.3 7v-.8L46 5.1h1v6l1.1.4-.5 1ZM45.7 1.1c.4 0 .8.2 1 .4.3.3.4.6.4 1 0 .3 0 .5-.3.7a2 2 0 0 1-.7.6l-.8.2c-.4 0-.7-.1-1-.4-.3-.2-.4-.6-.4-1 0-.2 0-.5.3-.7l.7-.5.8-.3ZM42 12.5h-4.8v-.9l1.2-1v-6l-3.2 7.9H34l-3.3-8V11l1.5.6-.5 1h-3.5v-.9l1.3-1v-7L28 3.2l.5-1h4l2.8 7 2.9-7h4V3L41 4V11l1.5.4-.5 1ZM118.4 23v-5.2h1.2c.4 0 .9.1 1.2.4.3.2.5.6.5 1s-.1.6-.3 1l-.6.6 1.1 1.5c.3.3.7.5 1 .5v.3a2 2 0 0 1-.7-.2c-.2 0-.4-.2-.6-.4l-1.2-1.6h-1.2V23h-.4Zm1.4-2.4c.2 0 .5-.1.7-.4.2-.3.4-.6.4-1a1 1 0 0 0-.4-.8c-.3-.2-.6-.3-1-.3h-.7v2.5h1ZM114.4 23v-5.2h2.4v.3h-2v2h1.8v.2h-1.8v2.4h2.1v.3h-2.5ZM110.2 23v-5.2h1.2c.5 0 .9.1 1.2.3.3.3.4.6.4 1.1 0 .5-.2.9-.6 1.2-.4.3-.9.4-1.5.4v-.2a2 2 0 0 0 1.2-.4c.4-.2.6-.6.6-1s-.2-.7-.4-.8c-.3-.2-.6-.3-1-.3h-.7V23h-.4ZM106 23c-.8 0-1.4-.2-1.9-.7-.5-.5-.7-1.1-.7-1.9a2.6 2.6 0 0 1 2.6-2.7c.7 0 1.3.3 1.8.8s.8 1.2.8 2A2.6 2.6 0 0 1 106 23Zm0-5c-.7 0-1.2.3-1.6.7-.5.5-.7 1-.7 1.7s.2 1.2.7 1.7c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6.4-.5.6-1 .6-1.7s-.2-1.2-.6-1.7a2 2 0 0 0-1.6-.6ZM100.1 23v-5.2h.4v4.9h2.4v.3h-2.8ZM96.2 23v-5.2h2.4v.3h-2v2h1.8v.2h-1.9v2.4h2.2v.3h-2.5ZM93 22l1.7-4.2h.4L93 23h-.2l-2.3-5.2h.4l2 4.6.2-.5ZM87.3 23v-5.2h2.4v.3h-2v2h1.8v.2h-1.8v2.4h2.1v.3h-2.5ZM82.7 22.7c.8 0 1.4-.2 1.8-.6.5-.4.7-1 .7-1.8a2.6 2.6 0 0 0-2.7-2.7h-1.2v5l1.4.1Zm-.2-5.5c1 0 1.7.3 2.2.8.6.6 1 1.3 1 2.3 0 .4-.1.9-.3 1.2-.1.4-.4.7-.6 1-.6.4-1.3.6-2 .6l-2-.1v-5.7h1.7ZM73.7 22.7c.6 0 1.2-.2 1.6-.5.4-.4.6-1 .6-1.7s-.2-1.3-.7-1.8c-.4-.4-1-.6-1.7-.6h-1.1v4.6h1.3Zm-.2-5c.8 0 1.5.3 2 .8s.8 1.2.8 2c0 .9-.2 1.5-.7 2-.5.4-1.2.6-2 .6L72 23v-5.2h1.5ZM65.6 23v-5.2h.2l3.4 3.9a5.7 5.7 0 0 1 .5.6v-4.5h.4V23h-.2l-3.5-4-.4-.5V23h-.4ZM61.7 23v-5.2H64v.3h-2v2h1.8v.2H62v2.4h2.2v.3h-2.5ZM57.3 20h2.8v.4h-2.8v-.3ZM54.9 18.1H53v-.3H57v.3h-1.8V23H55v-4.9ZM47.6 23v-5.2h.1l3.5 3.9a5.7 5.7 0 0 1 .5.6v-4.5h.3V23h-.2l-3.4-4-.5-.5V23h-.3ZM43.4 23c-.8 0-1.4-.2-2-.7-.4-.5-.7-1.1-.7-1.9a2.6 2.6 0 0 1 2.7-2.7c.7 0 1.3.3 1.8.8s.8 1.2.8 2a2.6 2.6 0 0 1-2.6 2.6Zm0-5c-.7 0-1.2.3-1.6.7-.5.5-.7 1-.7 1.7s.2 1.2.7 1.7c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6.4-.5.6-1 .6-1.7s-.2-1.2-.6-1.7a2 2 0 0 0-1.6-.6ZM36.4 23v-5.2h1.1c.5 0 1 .1 1.3.4.3.2.4.6.4 1s0 .6-.2 1l-.6.6 1.1 1.5c.3.3.7.5 1 .5v.3a2 2 0 0 1-.7-.2c-.2 0-.4-.2-.6-.4a24 24 0 0 1-1.2-1.6h-1.3V23h-.3Zm1.4-2.4c.2 0 .5-.1.7-.4.2-.3.4-.6.4-1 0-.3-.2-.6-.4-.8-.3-.2-.6-.3-1-.3h-.8v2.5h1.1ZM32 23v-5.7h3v.3h-2.6v2.1h2.4v.3h-2.4v3h-.3Z"
      />
    </svg>
  );
};
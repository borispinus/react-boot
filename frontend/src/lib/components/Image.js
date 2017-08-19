import React from 'react';
import { Entity } from 'draft-js';

export default function Image(props) {
  return (
    <img src={props.src} className="drafjs-re_image"></img>
  );
}

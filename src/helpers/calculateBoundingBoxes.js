import React, { Children } from "react";

const calculateBoundingBoxes = children => {
  const boundingBoxes = {};
  
  React.Children.forEach(children, child => {
    const domNode = child.ref.current;
    if(!child.ref.current) return
    console.log('child', child);
    const nodeBoundingBox = domNode.getBoundingClientRect();

    boundingBoxes[child.key] = nodeBoundingBox;
  });

  return boundingBoxes;
};

export default calculateBoundingBoxes;

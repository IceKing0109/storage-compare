import React, { useState, createRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Bubble from "./Bubble";
import AnimateBubbles from "./AnimateBubbles";
import initialImages from "./initialImages";
import { useTransition, animated } from '@react-spring/web';
// import shuffleArray from "./helpers/shuffleArray";
import "./styles.css";
import "animate.css";
import style from './style.module.css';
import { Col, Row, Button } from "react-bootstrap";
import Filter from "./components/filter";
import { setData } from "../src/features/imageSlice";

export default function App() {


  const { currentLatencyWeight,
    currentCostWeight,
    currentSpeedWeight,
    currentCategory
} = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const IMAGES  = useSelector(state => state.image.images);
  const [images, setImages] = useState(IMAGES.map(item => { return {...item, weight: 0}}));
  const [count, setCount] = useState(0);
  console.log('images', images);

  useEffect(() => {
    setImages(IMAGES.map(item => { return {...item, weight: 0}}));
  }, [IMAGES])
  
useEffect(() => {

  const changedImages = arraySorterBySlider(currentLatencyWeight, currentSpeedWeight, currentCostWeight, images);
    console.log('weight>>>>>>>>>>>>>>>>>>>', changedImages);
    let tmp = count + 1
    setCount(tmp);
  // dispatch(setData(changedImages));
  //  setImages(images => arraySorterBySlider(currentLatencyWeight, currentSpeedWeight, currentCostWeight, images));
}, [currentCostWeight, currentLatencyWeight, currentSpeedWeight]);

  useEffect(() => {
    const changedImages = arraySorterByCategory(currentCategory, images);
    console.log("changed", changedImages);
    let tmp = count + 1
    setCount(tmp);

    dispatch(setData(changedImages));
    // setImages(changedImages);
    
  }, [currentCategory])
    const arraySorterByCategory = ( valueByCategory, images ) => {
        const tempImages = [...images];
        console.log("category", valueByCategory);
        console.log("temp", tempImages);
        if(valueByCategory == 'latency') tempImages.sort((a, b) => a.latency - b.latency);
        if(valueByCategory == 'speed') { console.log("tempspeed", tempImages); tempImages.sort((a, b) => a.speed - b.speed);} 
        if(valueByCategory == 'cost') tempImages.sort((a, b) => a.cost - b.cost);
        return tempImages;
    }
  const arraySorterBySlider = (latency, speed, cost, images) => {
    let maxLatency = Math.max(...images.map(item => item.latency));
    let minLatency = Math.min(...images.map(item => item.latency));
    let maxSpeed = Math.max(...images.map(item => item.speed));
    let minSpeed = Math.min(...images.map(item => item.speed));
    let maxCost = Math.max(...images.map(item => item.cost));
    let minCost = Math.min(...images.map(item => item.cost));
    console.log('maxLatency', maxLatency);
    console.log('minLatency', minLatency);
    console.log('maxCost', maxCost);
    console.log('minCost', minCost);
    console.log('maxSpeed', maxSpeed);
    console.log('minSpeed', minSpeed);

    var res = images.map(image => {
      const value = (image.latency - minLatency) / (maxLatency - minLatency) * latency + (image.speed - minSpeed) / (maxSpeed-minSpeed) * speed + (image.cost - minCost) / (maxCost - minCost) * cost;
      image = {...image, weight: value};
      return image;
    }).sort((a, b) => a.weight - b.weight);
    setImages(res);
  }

  // let height = 0
  // const transitions = useTransition(
  //   images.map(data => ({ ...data, y: (height += data.height) - data.height })),
  //   {
  //     key: (item) => item.name,
  //     from: { height: 0, opacity: 0 },
  //     leave: { height: 0, opacity: 0 },
  //     enter: ({ y, height }) => ({ y, height, opacity: 1 }),
  //     update: ({ y, height }) => ({ y, height }),
  //   }
  // )

  return (

      <Row className="m-0 py-5">
        <Col md={4}>
          <Filter />
         
        </Col>
        <Col md={8}>
          <Row className="m-0">
            {/* <AnimateBubbles> */}
              
              {
               images && images.map(({ id, name, location, latency, speed, cost }) => (
                
                <Bubble key={id} id={id}
                  name={name}
                  location={location}
                  latency={latency}
                  speed={speed}
                  cost={cost}
                  count={count}
                  />
              ))}
            {/* </AnimateBubbles> */}
          </Row>
        </Col>
      </Row>
  );
}

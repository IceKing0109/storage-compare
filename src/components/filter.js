import React, { useState, useEffect } from "react";
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'
import { Form } from 'react-bootstrap';
// To include the default styles
import 'react-rangeslider/lib/index.css'
import { useDispatch, useSelector } from "react-redux";
import { setCostWeight, setLatencyWeight, setSpeedWeight, setCategory } from "../features/filterSlice";
const Filter = () => {
    const { currentLatencyWeight,
        currentCostWeight,
        currentSpeedWeight,
        currentCategory
    } = useSelector(state => state.filter);


    const dispatch = useDispatch();
    const [currentLatencyWeightValue, set_currentLatencyWeightValue] = useState(currentLatencyWeight);
    const [currentCostWeightValue, set_currentCostWeightValue] = useState(currentCostWeight);
    const [currentSpeedWeightValue, set_currentSpeedWeightValue] = useState(currentSpeedWeight);
    const [totalWeightValue, setSum] = useState(0);

    const calculateTotalWeight = () => {
        const currentTotalWeightValue = currentLatencyWeightValue + currentCostWeightValue + currentSpeedWeightValue;

        setSum(currentTotalWeightValue);
    };
    const handleLatencyWeightInput = (e) => {
        set_currentLatencyWeightValue(e);
        dispatch(setLatencyWeight({ currentLatencyWeight: e }));
    };
    const handleSpeedWeightInput = (e) => {
        set_currentSpeedWeightValue(e);
        dispatch(setSpeedWeight({ currentSpeedWeight: e }));
    };
    const handleCostWeightInput = (e) => {
        set_currentCostWeightValue(e);
        dispatch(setCostWeight({ currentCostWeight: e }));
    };
    const handleSelectedCategory = (e) => {
        dispatch(setCategory({ currentCategory: e }));
    };
    useEffect(() => {
        calculateTotalWeight();
    }, [currentLatencyWeightValue, currentCostWeightValue, currentSpeedWeightValue]);

    return (
        <div className="border border-secondary p-4 rounded m-2">
            <h3 className="text-white">Filter</h3>
            <hr />
            <p className="slider-label text-center">Sort</p>
            <div className="text-center mb-4">
                {/* <select defaultValue="latency" onChange={(e) => { handleSelectedCategory(e.target.value) }}>
                    <option value="latency">Latency</option>
                    <option value="speed">Speed</option>
                    <option value="cost">Cost</option>
                </select> */}

                <Form.Select aria-label="Default select example" defaultValue="latency" onChange={(e) => { handleSelectedCategory(e.target.value) }}>
                    <option value="latency">Latency</option>
                    <option value="speed">Speed</option>
                    <option value="cost">Cost</option>
                </Form.Select>

            </div>
            <hr className="text-white bg-white" />
            <p className="slider-label text-center">Latency</p>
            <Slider
                min={0.0}
                max={1.0}
                step={0.1}
                value={currentLatencyWeightValue.toFixed(1)}
                label={true}
                preventWheel={false}
                onChange={(e) => {
                    handleLatencyWeightInput(e);
                }}
            />
            <p className="slider-label text-center mt-4">Speed</p>
            <Slider
                min={0.0}
                max={1.0}
                step={0.1}
                value={currentSpeedWeightValue.toFixed(1)}
                label={true}
                preventWheel={false}
                onChange={(e) => {
                    handleSpeedWeightInput(e);
                }}
            />
            <p className="slider-label text-center mt-4">Cost</p>
            <Slider
                min={0.0}
                max={1.0}
                step={0.1}
                value={currentCostWeightValue.toFixed(1)}
                label={true}
                preventWheel={false}
                onChange={(e) => {
                    handleCostWeightInput(e);
                }}
            />
            <p>{totalWeightValue}</p>
            <br />
             <p className="text-white">Latency : {(totalWeightValue && 1 / totalWeightValue * currentLatencyWeight).toFixed(2)}</p>
            <p className="text-white">Speed : {(totalWeightValue && 1 / totalWeightValue * currentSpeedWeight).toFixed(2)}</p>
            <p className="text-white">Cost : {(totalWeightValue && 1 / totalWeightValue * currentCostWeight).toFixed(2)}</p>
            <p className="text-white">{currentCategory}</p>
            {/* <div class="animate__animated animate__bounce animate__delay-2s">Example</div> */}
            <br /> 
        </div>
    )
}

export default Filter
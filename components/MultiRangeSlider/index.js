import React, { useCallback, useEffect, useState, useRef } from "react";
import styled from 'styled-components'

const Slider = styled.div`
  // position: relative;
  // width: 200px;
`

const ContainerSlider = styled.div`
  // position: relative;
  // width: 200px;
`

const PositionAbsolute = styled.div`
  position: absolute;
`

const SliderTrackRange = styled.div`
  border-radius: 3px;
  height: 5px;
`

const SliderTrack = styled.div`
  background-color: #EBEBEB;
  width: 100%;
  z-index: 1;
`

const SliderRange = styled.div`
  background-color: #6A983C;
  z-index: 2;
`

const SliderValueLeftRight = styled.div`
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
`

const SliderLeftValue = styled.div`
  left: 6px;
`

const SliderRightValue = styled.div`
  right: -4px;
`

/* Removing the default appearance */

const ThumbWebKit = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    
    background-color: #f1f5f7;
    border: 1px solid #D1D1D1;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  &::-moz-range-thumb {
    background-color: #f1f5f7;
    border: 1px solid #D1D1D1;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`

const Thumb = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
`

const ThumbLeft = styled.div`
  z-index: 3;
`

const ThumbRight = styled.div`
  z-index: 4;
`

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <ContainerSlider>

      <div style={{width: 200, position: "relative"}}>

        <ThumbLeft
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          as={ThumbWebKit}
          style={{ zIndex: minVal > max - 100 && 5, pointerEvents: "none", position: "absolute", height: 0, width: 200, outline: "none", marginLeft: -5 }}
        />

        <ThumbRight
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          style={{ pointerEvents: "none", position: "absolute", height: 0, width: 200, outline: "none" }}
          as={ThumbWebKit}
        />

        <SliderTrack as={SliderTrackRange} style={{ position: "absolute" }} />
        <SliderRange as={SliderTrackRange} style={{ left: "0%", width: "100%", position: "absolute" }} ref={range} />
      </div>

      <Slider>
        
        <div style={{display: "flex", justifyContent: "space-between", padding: "16px 0 0 0"}}>

          <SliderLeftValue as={SliderValueLeftRight} >
            <div style={{ color: "#151515", fontWeight: 600 }}>
              <span>Min</span>
            </div>
            <div style={{ color: "#151515", fontWeight: 600, background: "#F9F9F9", border: '1px solid #D1D1D1', borderRadius: 12, width: 72, padding: "11px 16px 8px 22px", lineHeight: 1.9 }}>
              {minVal}
            </div>
          </SliderLeftValue>
          <SliderRightValue as={SliderValueLeftRight} >
            <div style={{ color: "#151515", fontWeight: 600 }}>
              <span>Max</span>
            </div>
            <div style={{ color: "#151515", fontWeight: 600, background: "#F9F9F9", border: '1px solid #D1D1D1', borderRadius: 12, width: 72, padding: "11px 16px 8px 22px", lineHeight: 1.9 }}>
              {maxVal}
            </div>
          </SliderRightValue>

        </div>

      </Slider>
      
    </ContainerSlider>
  );
};


export default MultiRangeSlider;

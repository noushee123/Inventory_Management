import React from 'react'
import ProgressBar from 'react-customizable-progressbar'
//import styled from "styled-components";

const Progressbar = () => {

  return (
      <ProgressBar
        radius={30} // Progress bar radius
        progress={60} // Progress value (out of steps)
        steps={100} // Total steps
        cut={10} // Angle of the circle sector
        rotate={-90} // Progress rotation
        strokeWidth={15} // Stroke width
        strokeColor='rgb(61, 198, 168)' // Stroke color
        strokeLinecap='round' // Stroke line cap
        transition='0.3s ease' // Transition
        trackStrokeWidth={15} // Track stroke width
        trackStrokeColor='#e6e6e6' // Track stroke color
        trackStrokeLinecap='butt' // Track stroke line cap
        trackTransition='0.3s ease' // Track transition
        //pointerRadius={5} // Pointer radius
        pointerStrokeWidth={10} // Pointer stroke width
        pointerStrokeColor='rgb(61, 198, 168)' // Pointer stroke color
        pointerFillColor='white' // Pointer fill color
        initialAnimation={true} // Initial animation
        initialAnimationDelay={0} // Initial animation delay
        inverse={false} // Inverse  
        counterClockwise={false} // Counter-clockwise
        className='progress-bar' // Progress bar class name
      >
        <div style={{ fontSize: '15px', color: 'black'}}>
          78%
        </div>
      </ProgressBar>
  );
};

export default Progressbar;
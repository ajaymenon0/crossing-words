import React, { useRef, useState, useEffect } from "react";
import "./tile.css";

const Tile = ({ value, tilenum, pressed, shiftIndex, currIndex, toggleMode, activeIndex, isHorizontalMode }) => {
  const [tileVal, setTileVal] = useState();
  const [active, setActive] = useState();
  const inputRef = useRef();
  const isBlank = value === ".";
  const blankClass = isBlank ? " blank" : "";
  let lightup;
  if (isHorizontalMode) {
    lightup = (currIndex%15) === activeIndex%15;
  }  else {
    lightup = (currIndex > (Math.floor(activeIndex/15))*15 - 1)
    && (currIndex < (Math.floor(activeIndex/15)+1)*15);
  }
  const step = isHorizontalMode ? 1 : 15;
  console.log('AI: ', Math.floor(activeIndex/15));
  const focusInput = (e) => {
    setActive(true);
    inputRef.current.focus();
    shiftIndex(currIndex);
    if (e && (currIndex === activeIndex)) toggleMode();
  }

  const setVal = (e) => {
    const inputValue = e.target.value;
    const getLast = inputValue.split('').reverse()[0];
    if (getLast) {
      setTileVal(getLast.toUpperCase() || '');
      shiftIndex(currIndex + step);
    } else {
      setTileVal('')
      shiftIndex(currIndex - step);
    }
    // inputRef.current.blur();
  }

  const checkInput = (event) => {
    const key = event.keyCode || event.charCode;
    if( key === 8 || key === 46 ) shiftIndex(currIndex - step);
  }

  useEffect(() => {
    if (pressed) focusInput();
  }, [pressed]);

  return (
    <div
      className={`tile${blankClass}${(!isBlank && active)? ' active' : ''} ${lightup ? 'lit' : ''}`}
      onClick={focusInput}
    >
      {
        !!tilenum
        && <span className="tilenum">{tilenum}</span>
      }
      <input
        value={tileVal}
        disabled={isBlank}
        ref={inputRef}
        onChange={setVal}
        onKeyDown={checkInput}
        onBlur={() => setActive(false)}
      />
    </div>
  );
}

export default Tile;

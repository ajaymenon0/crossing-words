import React, { useState } from "react";
import Tile from "../Tile/Tile";
import Clues from "../Clues";

const Crossword = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHorizontalMode, toggleIsHorizontalMode] = useState(false);
  const { grid, gridnums } = data;

  const shiftIndex = (index = null) => setActiveIndex(index);

  const toggleMode = () => toggleIsHorizontalMode(!isHorizontalMode);

  return (
    <div>
      <div className={`crossword-container ${isHorizontalMode?'hor':'ver'}`}>
        {
          grid.map((value, index) => 
            <>
              <Tile
                pressed={index === activeIndex}
                shiftIndex={shiftIndex}
                value={value}
                tilenum={gridnums[index]}
                currIndex={index}
                toggleMode={toggleMode}
                activeIndex={activeIndex}
                isHorizontalMode={isHorizontalMode}
              />
              <Break index={index} cols={data.size.cols} />
            </>
          )
        }
      </div>
      <Clues clues={data.clues} />
    </div>
  )
} 

const Break = ({index, cols}) => ((index+1) % 15 === 0) && (index !== 0) && <br />

export default Crossword;

/* 
start Rating conditions
1. create dynamic starr number instead of static span to create each star
2. make an array based on StartCount props 
to create an array (new Array(props).fill(0))
this code will return array of 0 value
after that we can run a map function and return span tag of star &#9733;
3. to make it key value in the array props we give _, idx this will ensure every star key is unique

4. 3 functionality will be added 
 i) when a star is clicked from this star to previous all star will be colored. to do this we can do the following task
 a) create a useState(default value 0)
 b) onClick setStartValue (idx) this will print all the idx when clicked each star
 c) add dynamic class if idx < starValue then text will be yellow or "" 

 ii) when mouseenter means hover then all the value of the hover and previous will be changed color 
 a) make a empty state of hoverValue
 b) onMouseEnter setHoverValue idx + 1
 c) add dynamic class || idx < hover value

 iii) when mouse leave set hover value will be 0  and set hoverValue === 0 && then add other logic 
*/

"use client";

import { useState } from "react";

export type TStar = {
  starCount: number;
};
export default function StarRating({ starCount }: TStar) {
  const [starValue, setStarValue] = useState<number>(0);
  const [hoverValue, setHoverValue] = useState<number>(0);

  return (
    <div>
      {new Array(starCount).fill(0).map((_, idx) => {
        return (
          <span
            onClick={() => setStarValue(idx + 1)}
            onMouseEnter={() => setHoverValue(idx + 1)}
            onMouseLeave={() => setHoverValue(0)}
            className={
              (hoverValue === 0 && idx < starValue) || idx < hoverValue
                ? "text-yellow-500 hover:cursor-pointer"
                : " hover:cursor-pointer"
            }
            key={idx}
          >
            {" "}
            &#9733;{" "}
          </span>
        );
      })}
    </div>
  );
}

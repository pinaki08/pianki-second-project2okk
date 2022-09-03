 import {areaOfRectangle} from "../Utility/general"
 function AreaOfRectangle() {
    const length = 4;
    const width = 3;
    const newArea = areaOfRectangle(length, width);
    return (
      <h1>
        Area of Rectangle having length : <b>{length}</b> width: <b>{width}</b>{" "}
        {""}
        so area = <b>{newArea}</b>
      </h1>
    );
  }
  export default AreaOfRectangle;

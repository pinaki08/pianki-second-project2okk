import { areaOfcircle } from "../Utility/general";
export const AreaOfcircle = () => {
  const radius = 6;
  const pie = Math.PI;
  const currentArea = areaOfcircle(radius, pie);
  return (
    <div>
      Area of circle having radius = <b>{radius}</b> so area = <b>{currentArea}</b>{" "}
    </div>
  );
};

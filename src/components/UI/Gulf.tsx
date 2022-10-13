import { FC, useEffect } from "react";

interface Details {
  num: number;
}

const Gulf: FC<Details> = ({ num }) => {
  useEffect(() => {
    const canvas = document.getElementById(
      `myCanvas${num}`
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx!.beginPath();
    ctx!.arc(115, 70, 61, Math.PI / 12, (11 * Math.PI) / 12);
    ctx!.strokeStyle = "#14172B";
    ctx!.fillStyle = "#14172B";
    ctx!.fill();
    ctx!.strokeStyle = "#14172B";
    ctx!.stroke();

    ctx!.beginPath();
    ctx!.arc(197.5, 90, 25, Math.PI, (3 * Math.PI) / 2);

    ctx!.arc(32.5, 90, 25, (3 * Math.PI) / 2, 0);
    ctx!.fillStyle = "#14172B";
    ctx!.fill();
    ctx!.strokeStyle = "#14172B";
    ctx!.stroke();
  }, [num]);

  return (
    <canvas
      className="relative top-4 left-[2.5rem]"
      id={`myCanvas${num}`}
    ></canvas>
  );
};

export default Gulf;

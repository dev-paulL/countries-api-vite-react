import React from "react";
import { GridLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
      <p className="text-xl py-5">Loading, please wait..</p>
      <GridLoader />
    </div>
  );
}

"use client";
import React from "react";
import useGyroscope from "../../hooks/useGyroscope";

export default function GyroTable() {
  const state = useGyroscope();

  return (
    <div>
      <h2>Gyroscope Data</h2>
      <div>X: {state.x ?? "N/A"}</div>
      <div>Y: {state.y ?? "N/A"}</div>
      <div>Z: {state.z ?? "N/A"}</div>
    </div>
  );
}
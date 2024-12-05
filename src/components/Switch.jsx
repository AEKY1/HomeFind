import React from "react";
import { useState } from "react";

export const Switch = ({ onSwitch }) => {
  return (
    <label class="inline-flex items-center cursor-pointer">
      <input
        onChange={(e) => {
          onSwitch(e.target.checked);
        }}
        type="checkbox"
        value=""
        class="sr-only peer"
      />
      <div class="relative w-[64px] h-[22px] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[42px] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[18px] after:w-[18px] after:transition-all dark:border-gray-600 peer-checked:bg-[#4ADE80]"></div>
    </label>
  );
};

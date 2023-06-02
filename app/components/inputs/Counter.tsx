"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  value: number;
  subtitle: string;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  value,
  subtitle,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="text-md text-gray-500">{title}</div>
        <div className="text-sm text-gray-400">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center cursor-pointer text-neutral-600 hover:opacity-80 transition-opacity"
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-600">
          {value.toLocaleString()}
        </div>
        <div
          onClick={onAdd}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center cursor-pointer text-neutral-600 hover:opacity-80 transition-opacity"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;

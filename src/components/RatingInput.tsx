import React, { useState, useMemo } from 'react';
import { Star } from 'lucide-react';
import clsx from 'clsx';

interface RatingInputProps {
  /** The total number of stars to display. */
  count?: number;
  /** The current rating value. */
  value: number;
  /** Callback function that is fired when the rating changes. */
  onChange: (value: number) => void;
  /** The size of the star icons. */
  size?: number;
  /** If true, the rating will be read-only. */
  readOnly?: boolean;
  /** Optional additional class names for the container. */
  className?: string;
}

const RatingInput: React.FC<RatingInputProps> = ({
  count = 5,
  value,
  onChange,
  size = 24,
  readOnly = false,
  className,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  console.log('RatingInput loaded');

  const stars = useMemo(() => Array(count).fill(0), [count]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (readOnly) return;
    const starEl = e.currentTarget;
    const rect = starEl.getBoundingClientRect();
    const isHalf = (e.clientX - rect.left) / rect.width <= 0.5;
    setHoverValue(index + (isHalf ? 0.5 : 1));
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverValue(null);
  };

  const handleClick = () => {
    if (readOnly || hoverValue === null) return;
    onChange(hoverValue);
  };

  const displayValue = hoverValue ?? value;

  return (
    <div
      className={clsx('flex items-center space-x-1', { 'cursor-pointer': !readOnly }, className)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      aria-label={`Rating: ${value} out of ${count} stars.`}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={count}
      aria-valuenow={value}
      aria-readonly={readOnly}
    >
      {stars.map((_, index) => {
        const starValue = index + 1;
        const isFilled = displayValue >= starValue;
        const isHalfFilled = displayValue >= starValue - 0.5 && displayValue < starValue;

        return (
          <div
            key={index}
            className="relative"
            onMouseMove={(e) => handleMouseMove(e, index)}
            data-testid={`star-${index + 1}`}
          >
            <Star
              size={size}
              className={clsx('text-gray-300', {
                'transition-transform transform scale-110': hoverValue !== null && (isFilled || isHalfFilled)
              })}
              fill="currentColor"
            />
            {(isFilled || isHalfFilled) && (
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: isFilled ? '100%' : '50%' }}
              >
                <Star
                  size={size}
                  className="text-yellow-400"
                  fill="currentColor"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RatingInput;
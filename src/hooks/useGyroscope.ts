import { useEffect, useState } from 'react';

// Type for the gyroscope readings
interface GyroReadings {
  x: number | null;
  y: number | null;
  z: number | null;
}

// Type for the options parameter
interface GyroscopeOptions {
  frequency?: number;
}

// Type for the callback
type GyroCallback = (readings: GyroReadings) => void;

interface Gyroscope extends EventTarget {
  x: number | null;
  y: number | null;
  z: number | null;
  start(): void;
  stop(): void;
  addEventListener(type: 'reading' | 'error', listener: (event: Event) => void): void;
  removeEventListener(type: 'reading' | 'error', listener: (event: Event) => void): void;
}

interface Window {
  Gyroscope?: {
    new (options?: { frequency?: number }): Gyroscope;
  };
}

export default function useGyroscope(
  options: GyroscopeOptions = {},
  callback?: GyroCallback
): GyroReadings {
  const [angularVelocity, setAngularVelocity] = useState<GyroReadings>({
    x: null,
    y: null,
    z: null,
  });

  useEffect(() => {
    const GyroscopeClass = window.Gyroscope;
    let sensor: Gyroscope | undefined;

    if (GyroscopeClass) {
      sensor = new GyroscopeClass(options);

      const handleReading = () => {
        const readings: GyroReadings = {
          x: sensor?.x ?? null,
          y: sensor?.y ?? null,
          z: sensor?.z ?? null,
        };
        setAngularVelocity(readings);
        if (typeof callback === 'function') callback(readings);
      };

      const handleError = (event: Event) => {
        // @ts-expect-error: error property may exist
        console.log(event.error?.name, event.error?.message);
        setAngularVelocity({ x: null, y: null, z: null });
      };

      sensor.addEventListener('reading', handleReading);
      sensor.addEventListener('error', handleError);
      sensor.start();

      return () => {
        sensor?.removeEventListener('reading', handleReading);
        sensor?.removeEventListener('error', handleError);
        sensor?.stop();
      };
    } else {
      console.warn('Gyroscope is not supported by this browser.');
    }
    return;
  }, [callback, options]);

  return angularVelocity;
} 
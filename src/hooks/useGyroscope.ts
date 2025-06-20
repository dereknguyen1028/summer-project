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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GyroCallback = (readings: GyroReadings) => void;

const useGyroscope = (
  options: GyroscopeOptions = {},
  callback?: GyroCallback
): GyroReadings => {
  const [angularVelocity, setAngularVelocity] = useState<GyroReadings>({
    x: null,
    y: null,
    z: null,
  });

  useEffect(() => {
    let sensor: any;

    // @ts-ignore: Gyroscope may not exist on window in all browsers
    if ('Gyroscope' in window) {
      // @ts-ignore: Gyroscope may not exist on window in all browsers
      sensor = new (window as any).Gyroscope(options);

      sensor.start();
      sensor.onreading = () => {
        const readings: GyroReadings = {
          x: sensor.x,
          y: sensor.y,
          z: sensor.z,
        };

        setAngularVelocity(readings);

        if (typeof callback === 'function') {
          callback(readings);
        }
      };
      sensor.onerror = (event: any) => {
        console.log(event.error.name, event.error.message);
        setAngularVelocity({
          x: null,
          y: null,
          z: null,
        });
      };
    } else {
      console.warn('Gyroscope is not supported by this browser.');
    }

    return () => {
      if (sensor) {
        sensor.stop();
      }
    };
  }, [callback, options]);

  return angularVelocity;
};

export default useGyroscope; 
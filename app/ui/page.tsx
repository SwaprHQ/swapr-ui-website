import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "@/tailwind.config";
import { ThemeSwitch } from "@/components";

const fullConfig = resolveConfig(tailwindConfig);

function extractStringValuesFromObject(object: any): string[] {
  const keys = [];

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];

      if (typeof value === "string") {
        keys.push(key);
      } else if (typeof value === "object" && value) {
        const nestedKeys = extractStringValuesFromObject(value);
        keys.push(...nestedKeys.map((nestedKey) => `${key}-${nestedKey}`));
      }
    }
  }

  return keys;
}

const tailwindColors: { [key: string]: Array<string> } = Object.keys(
  fullConfig.theme.colors
).reduce(
  (acc, key) => ({
    ...acc,
    [key]: extractStringValuesFromObject(fullConfig.theme.colors[key]),
  }),
  {}
);

export default function UI() {
  return (
    <main className="px-5 mx-auto my-10 max-w-screen-xl">
      <ThemeSwitch />
      <div className="pb-12 my-12 space-y-5">
        <h1 className="text-3xl">Swapr UI</h1>
        <div className="space-y-4 pb-5 border-b">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex space-x-2">
            <button className="bg-surface-primary-accent-1 text-text-primary-base-em rounded-6 px-4 py-2">
              Purple button
            </button>
            <button className="bg-surface-info-accent-1 text-text-info-high-em rounded-6 px-4 py-2">
              Blue button
            </button>
            <button className="bg-surface-danger-accent-1 text-text-danger-high-em rounded-6 px-4 py-2">
              Red button
            </button>
            <button className="bg-surface-success-accent-1 text-text-success-high-em rounded-6 px-4 py-2">
              Green button
            </button>
            <button className="bg-surface-warning-accent-1 text-text-neutral-alt-white rounded-6 px-4 py-2">
              Yellow button
            </button>
          </div>
        </div>
        <div className="space-y-4 pb-5 border-b">
          <h2 className="text-2xl font-semibold">Font sizes</h2>
          <div className="space-y-2">
            <p>
              9. <span className="text-3xl">Font size 3xl</span>
            </p>
            <p>
              8. <span className="text-2xl">Font size 2xl</span>
            </p>
            <p>
              7. <span className="text-xl">Font size xl</span>
            </p>
            <p>
              6. <span className="text-lg">Font size lg</span>
            </p>
            <p>
              5. <span className="text-md">Font size md</span>
            </p>
            <p>
              4. <span className="text-base">Font size base</span>
            </p>
            <p>
              3. <span className="text-sm">Font size sm</span>
            </p>
            <p>
              2. <span className="text-xs">Font size xs</span>
            </p>
            <p>
              1. <span className="text-2xs">Font size 2xs</span>
            </p>
          </div>
        </div>
        <div className="space-y-4 pb-5 border-b">
          <h2 className="text-2xl font-semibold">Box Shadows</h2>
          <div className="space-y-2">
            <div className="bg-surface-disabled-low-em rounded-16 shadow-0 w-[1000px] h-[700px]">
              <div className="bg-surface-disabled-low-em rounded-16 shadow-1 w-[900px] h-[600px]">
                <div className="bg-surface-disabled-med-em rounded-16 shadow-2 w-[800px] h-[500px]">
                  <div className="bg-surface-disabled-high-em rounded-16 shadow-3 w-[700px] h-[400px]">
                    <div className="bg-surface-disabled-high-em rounded-16 shadow-4 w-[600px] h-[300px]">
                      <div className="bg-surface-disabled-high-em rounded-16 shadow-5 w-[500px] h-[200px]">
                        <div className="bg-surface-disabled-high-em rounded-16 shadow-6 w-[400px] h-[100px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 pb-5 border-b">
          <h2 className="text-2xl font-semibold">Colors</h2>
          <div className="space-y-2">
            {Object.keys(tailwindColors).map((key) => (
              <div key={key} className="space-y-2">
                <p className="text-xl capitalize">{key}</p>
                <div className="space-y-2">
                  {tailwindColors[key].map((color) => (
                    <div key={color} className="flex space-x-4">
                      <p>{`${key}-${color}`}</p>
                      <div className={`bg-${key}-${color} w-20 h-10`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

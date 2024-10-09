import babel from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"

const config = [
    {
        input: "src/index.ts",
        output: {
            file: "dist/esm/index.mjs",
            exports: "named",
            format: "esm",
        },
        external: ['clsx', 'tailwind-merge', 'react', 'uuid'],
        plugins: [
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**",
            }),
            typescript(),
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/cjs/index.cjs",
            exports: "named",
            format: "cjs",
        },
        external: ['clsx', 'tailwind-merge', 'react', 'uuid'],
        plugins: [
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**",
            }),
            typescript(),
        ],
    }
]

export default config

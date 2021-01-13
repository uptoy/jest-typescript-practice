module.export = {
    preset: "ts-jest/presets/js-with-ts",
    testEnvironment: "node",
    collectCoverage: true,
    coveragePathIgnorePatterns: ["/node_modules/", "build/"],
    transformIgnorePatterns: [
        "node_modules/(?!(mapboxgl | mapbox/mapbox-gl-draw)/)",
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statement: 80,
        },
    },
};
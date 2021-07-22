import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
    verbose: true,
    moduleFileExtensions: ["js", "ts"],
    transform: { "\\.ts$": "ts-jest" },
}
export default config

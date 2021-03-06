const require = (window as any).require;

const path = require("path");
const os = require("os");

export function displayMinutes(mins: number): string {
	if (mins >= 60) {
		let hours = Math.floor(mins / 60);
		mins = mins - hours * 60;

		return (
			displayPlural(hours, "hour") + " " + displayPlural(mins, "minute")
		);
	} else {
		return mins + (mins == 1 ? " minute" : " minutes");
	}
}

export function displayPlural(n: number, singular: string, plural?: string) {
	return (
		n + " " + (n == 1 ? singular : plural != null ? plural : singular + "s")
	);
}

export const tutorialWorldAddress = "file:///~/serverless/tutorial.json";

export const getOsConfigPath = () =>
	path.resolve(
		process.platform == "win32"
			? path.resolve(os.homedir(), "AppData/Roaming")
			: process.platform == "darwin"
			? path.resolve(os.homedir(), ".config")
			: process.platform == "linux"
			? path.resolve(os.homedir(), ".config")
			: null,
	);

export const getOsLocalPath = () =>
	path.resolve(
		process.platform == "win32"
			? path.resolve(os.homedir(), "AppData/Local")
			: process.platform == "darwin"
			? path.resolve(os.homedir(), "Library/Application Support")
			: process.platform == "linux"
			? path.resolve(os.homedir(), ".local/share")
			: null,
	);

export type Repo = {
	name: string;
	description: string;
	url: string;
	language?: string;
	topics?: string[];
};

export type RepoCategory = {
	id: string;
	title: string;
	description: string;
	repos: Repo[];
};

/**
 * Curated software list for the site. Edit categories and repos here.
 * Later we can wire this up to the GitHub API and keep categories in config.
 */
export const repoCategories: RepoCategory[] = [
	{
		id: "windows",
		title: "Windows tools",
		description: "Desktop utilities, tray apps, context menus, and system helpers.",
		repos: [
			{
				name: "IconPull",
				description:
					"Extract icons from .exe, .dll, .mun, and .ico files. Export Shell-rendered PNG, raw ICO, or embedded PNG.",
				url: "https://github.com/mirbyte/IconPull",
				language: "C#",
				topics: ["windows", "icons"],
			},
			{
				name: "file-hash-verifier",
				description:
					"Fast hash verification with context menu integration. MD5, SHA-1, SHA-256, SHA-512, and SHA3-256.",
				url: "https://github.com/mirbyte/file-hash-verifier",
				language: "Python",
				topics: ["windows", "context-menu"],
			},
			{
				name: "VirusTotal-Context-Menu",
				description: "Scan files with VirusTotal from the right-click menu. Uses your own free API key.",
				url: "https://github.com/mirbyte/VirusTotal-Context-Menu",
				language: "Batchfile",
				topics: ["windows", "context-menu"],
			},
			{
				name: "windows-cpu-limit-tray",
				description: "Tray utility to cap the active power plan's plugged-in CPU maximum processor state.",
				url: "https://github.com/mirbyte/windows-cpu-limit-tray",
				language: "Python",
				topics: ["windows", "tray"],
			},
			{
				name: "windows-drag-threshold",
				description: "View and adjust the system-wide mouse drag threshold on Windows.",
				url: "https://github.com/mirbyte/windows-drag-threshold",
				language: "Python",
				topics: ["windows"],
			},
			{
				name: "Windows-Repair-Tool",
				description:
					"Interactive repair and maintenance tool with diagnostics, file system checks, and Windows Update troubleshooting.",
				url: "https://github.com/mirbyte/Windows-Repair-Tool",
				topics: ["windows", "maintenance"],
			},
			{
				name: "Phone-Link-Uninstaller",
				description: "Uninstall Phone Link completely. Tested on Windows 11.",
				url: "https://github.com/mirbyte/Phone-Link-Uninstaller",
				language: "PowerShell",
				topics: ["windows"],
			},
			{
				name: "HostsMatic",
				description: "Lightweight hosts file automation. Checks for blocklist updates at Windows startup.",
				url: "https://github.com/mirbyte/HostsMatic",
				language: "Batchfile",
				topics: ["windows", "privacy"],
			},
			{
				name: "Android-Archiver",
				description: "Fast Android file system backups on Windows, kept as simple as possible.",
				url: "https://github.com/mirbyte/Android-Archiver",
				language: "Python",
				topics: ["windows", "android"],
			},
			{
				name: "FileDiff",
				description: "Visual file and directory diff tool.",
				url: "https://github.com/mirbyte/FileDiff",
				topics: ["windows"],
			},
			{
				name: "StreamBlock",
				description: "Create draggable colored overlay blocks on your screen.",
				url: "https://github.com/mirbyte/StreamBlock",
				language: "Python",
				topics: ["windows", "overlay"],
			},
			{
				name: "apktool-updater-windows",
				description: "Updater and installer for apktool.jar from iBotPeaches. Tested on Windows 11.",
				url: "https://github.com/mirbyte/apktool-updater-windows",
				language: "Python",
				topics: ["windows", "android"],
			},
		],
	},
	{
		id: "scripts",
		title: "Scripts & automation",
		description: "Python scripts, portable app updaters, and file utilities.",
		repos: [
			{
				name: "Simple-File-Management-Scripts",
				description: "Low-effort file management scripts I use almost daily on Windows.",
				url: "https://github.com/mirbyte/Simple-File-Management-Scripts",
				language: "Python",
				topics: ["python", "files"],
			},
			{
				name: "onetxt",
				description: "Merge multiple text files into one clean context file for LLMs.",
				url: "https://github.com/mirbyte/onetxt",
				language: "Python",
				topics: ["python", "llm"],
			},
			{
				name: "youtube-whisper-transcriber",
				description: "Transcribe YouTube videos to text using OpenAI Whisper large-v3.",
				url: "https://github.com/mirbyte/youtube-whisper-transcriber",
				language: "Python",
				topics: ["python", "whisper"],
			},
			{
				name: "Text-List-Tools",
				description: "Generate and modify .txt files in list format. Handy for wordlists and similar.",
				url: "https://github.com/mirbyte/Text-List-Tools",
				language: "Python",
				topics: ["python"],
			},
			{
				name: "portapps-qBittorrent-updater",
				description: "Update the portable qBittorrent client from portapps.io.",
				url: "https://github.com/mirbyte/portapps-qBittorrent-updater",
				language: "Python",
				topics: ["portable", "windows"],
			},
			{
				name: "portapps-Brave-updater",
				description: "Update the portable Brave browser from portapps.io.",
				url: "https://github.com/mirbyte/portapps-Brave-updater",
				language: "Python",
				topics: ["portable", "windows"],
			},
		],
	},
	{
		id: "web",
		title: "Websites",
		description: "Sites and web-facing projects.",
		repos: [
			{
				name: "mirbyte.github.io",
				description: "This site — a curated index of my software.",
				url: "https://github.com/mirbyte/mirbyte.github.io",
				language: "Astro",
				topics: ["astro", "github-pages"],
			},
			{
				name: "DropGain-website",
				description: "Website for DropGain.",
				url: "https://github.com/mirbyte/DropGain-website",
				language: "Astro",
				topics: ["astro"],
			},
		],
	},
	{
		id: "audio",
		title: "Audio",
		description: "Music and loudness tools.",
		repos: [
			{
				name: "DropGain",
				description: "Peak-safe EDM-oriented drop analysis based track loudness normalization.",
				url: "https://github.com/mirbyte/DropGain",
				language: "Python",
				topics: ["audio", "edm"],
			},
		],
	},
	{
		id: "trading",
		title: "Trading",
		description: "Indicators and bots for TradingView and cTrader.",
		repos: [
			{
				name: "TradingView-Indicators",
				description: "Pine Script indicators for TradingView.",
				url: "https://github.com/mirbyte/TradingView-Indicators",
				topics: ["tradingview", "pine-script"],
			},
			{
				name: "EMA-Cross-Entry",
				description: "cTrader cBot.",
				url: "https://github.com/mirbyte/EMA-Cross-Entry",
				language: "C#",
				topics: ["ctrader"],
			},
			{
				name: "CCi-Trend-Indicator",
				description: "cTrader 2-period commodity channel index indicator with signal arrows.",
				url: "https://github.com/mirbyte/CCi-Trend-Indicator",
				language: "C#",
				topics: ["ctrader"],
			},
			{
				name: "Tick-Timer-Indicator",
				description: "Counts seconds since the last price change.",
				url: "https://github.com/mirbyte/Tick-Timer-Indicator",
				language: "C#",
				topics: ["ctrader"],
			},
		],
	},
	{
		id: "browser",
		title: "Browser",
		description: "Userscripts and browser-related tweaks.",
		repos: [
			{
				name: "TwitchTV-Userscripts",
				description: "Userscript collection for twitch.tv.",
				url: "https://github.com/mirbyte/TwitchTV-Userscripts",
				language: "JavaScript",
				topics: ["userscript", "twitch"],
			},
		],
	},
];

export const categoryAccents: Record<string, string> = {
	windows: "#4db8ff",
	scripts: "#a78bfa",
	web: "#34d399",
	audio: "#f472b6",
	trading: "#fbbf24",
	browser: "#fb923c",
};

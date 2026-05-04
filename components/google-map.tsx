"use client";

/* GoogleMap — renders an interactive Google Map pinned to 育人教育学院's location.
   Reads the API key from NEXT_PUBLIC_GOOGLE_MAPS_API_KEY env variable so the
   key never gets hard-coded into the repo. */
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

// Exact coordinates for Pusat Tuisyen Moden Maju 育人教育学院（Connaught Edu）
const YUREN_POSITION = { lat: 3.0824, lng: 101.73416 };

// Default zoom level — close enough to see surrounding streets
const DEFAULT_ZOOM = 17;

export default function GoogleMap() {
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

	// Graceful fallback if the env variable is missing (e.g. in CI or fresh clone)
	if (!apiKey) {
		return (
			<div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-400">
				<p className="text-gray-500 dark:text-gray-400 text-sm">
					地图暂时无法加载 — 请设置 Google Maps API 密钥
				</p>
			</div>
		);
	}

	return (
		<APIProvider apiKey={apiKey}>
			<Map
				className="w-full h-64 rounded-lg overflow-hidden"
				defaultCenter={YUREN_POSITION}
				defaultZoom={DEFAULT_ZOOM}
				gestureHandling="cooperative"
				disableDefaultUI={false}
				mapId="yuren-contact-map">
				{/* Red-toned marker matching 育人's brand primary color */}
				<AdvancedMarker position={YUREN_POSITION} title="育人教育学院 Pusat Tuisyen Moden Maju">
					<Pin
						background="#bf391f"
						borderColor="#8a2514"
						glyphColor="#fff"
					/>
				</AdvancedMarker>
			</Map>
		</APIProvider>
	);
}

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";

export const useLoadMap = (
  containerRef: React.RefObject<HTMLDivElement>,
  coordinate: google.maps.LatLngLiteral
) => {
  useEffect(() => {
    (async () => {
      // Cria uma instância do Loader do Google Maps
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
        libraries: ["maps"],

      });

      // Carrega as bibliotecas necessárias e obtém a posição atual
      const { Map, Circle } = await loader.importLibrary("maps");

      // Inicializa o mapa do Google com a posição atual
      const map = new Map(containerRef.current!, {
        zoom: 15,
        center: coordinate,
        disableDefaultUI: true,
      });

      const circle = new Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: coordinate,
        radius: 300
      });
    })();
  }, [containerRef]);
};

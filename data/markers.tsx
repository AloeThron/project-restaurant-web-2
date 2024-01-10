import { type LatLngExpression } from "leaflet";

export type Markers = {
  position: LatLngExpression;
  title: string;
  subtitle: string;
  image: string;
};

export const markers: Markers[] = [
  {
    position: [34.052235, -118.243683],
    title: "Location 1",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/1.png",
  },
  {
    position: [33.9748, -118.3356],
    title: "Location 2",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/2.png",
  },
  {
    position: [34.0211, -118.3965],
    title: "Location 3",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/3.png",
  },
];

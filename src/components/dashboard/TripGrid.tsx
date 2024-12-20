import React, { useState } from "react";
import TripCard from "./TripCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Trip {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  coverImage: string;
  status: "upcoming" | "in-progress" | "completed";
  duration: string;
  destinations: string[];
}

interface TripGridProps {
  trips?: Trip[];
  onTripClick?: (tripId: string) => void;
}

const defaultTrips: Trip[] = [
  {
    id: "1",
    title: "California Coast Road Trip",
    startDate: "2024-03-01",
    endDate: "2024-03-15",
    coverImage:
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070",
    status: "upcoming",
    duration: "2 weeks",
    destinations: ["San Francisco", "Los Angeles", "San Diego"],
  },
  {
    id: "2",
    title: "Pacific Northwest Adventure",
    startDate: "2024-04-01",
    endDate: "2024-04-10",
    coverImage:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2070",
    status: "in-progress",
    duration: "10 days",
    destinations: ["Seattle", "Portland", "Vancouver"],
  },
  {
    id: "3",
    title: "Route 66 Journey",
    startDate: "2023-12-01",
    endDate: "2023-12-20",
    coverImage:
      "https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=2059",
    status: "completed",
    duration: "3 weeks",
    destinations: ["Chicago", "St. Louis", "Los Angeles"],
  },
];

const TripGrid = ({
  trips = defaultTrips,
  onTripClick = (tripId: string) => console.log("Trip clicked:", tripId),
}: TripGridProps) => {
  const [sortBy, setSortBy] = useState<"date" | "status">("date");

  const sortedTrips = [...trips].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    } else {
      const statusOrder = { "in-progress": 0, upcoming: 1, completed: 2 };
      return statusOrder[a.status] - statusOrder[b.status];
    }
  });

  return (
    <div className="w-full min-h-[850px] p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Your Road Trips</h2>
          <div className="flex items-center gap-4">
            <Select
              value={sortBy}
              onValueChange={(value: "date" | "status") => setSortBy(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Sort by Date</SelectItem>
                <SelectItem value="status">Sort by Status</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="default">Start New Trip</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedTrips.map((trip) => (
            <TripCard
              key={trip.id}
              title={trip.title}
              startDate={trip.startDate}
              endDate={trip.endDate}
              coverImage={trip.coverImage}
              status={trip.status}
              duration={trip.duration}
              destinations={trip.destinations}
              onClick={() => onTripClick(trip.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripGrid;

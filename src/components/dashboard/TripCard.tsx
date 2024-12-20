import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

interface TripCardProps {
  title?: string;
  startDate?: string;
  endDate?: string;
  coverImage?: string;
  status?: "upcoming" | "in-progress" | "completed";
  duration?: string;
  destinations?: string[];
  onClick?: () => void;
}

const TripCard = ({
  title = "California Coast Road Trip",
  startDate = "2024-03-01",
  endDate = "2024-03-15",
  coverImage = "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070",
  status = "upcoming",
  duration = "2 weeks",
  destinations = ["San Francisco", "Los Angeles", "San Diego"],
  onClick = () => console.log("Trip card clicked"),
}: TripCardProps) => {
  const statusColors = {
    upcoming: "bg-blue-500",
    "in-progress": "bg-green-500",
    completed: "bg-gray-500",
  };

  return (
    <Card
      className="w-[340px] h-[380px] cursor-pointer hover:shadow-lg transition-shadow bg-white"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <Badge className={`absolute top-4 right-4 ${statusColors[status]}`}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">
            {new Date(startDate).toLocaleDateString()} -{" "}
            {new Date(endDate).toLocaleDateString()}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{destinations.join(" → ")}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TripCard;

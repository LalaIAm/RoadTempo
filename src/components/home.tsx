import React from "react";
import TopNav from "./dashboard/TopNav";
import TripGrid from "./dashboard/TripGrid";

interface HomeProps {
  onNewTrip?: () => void;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onTripClick?: (tripId: string) => void;
  userAvatar?: string;
  userName?: string;
}

const Home = ({
  onNewTrip = () => console.log("New trip clicked"),
  onProfileClick = () => console.log("Profile clicked"),
  onSettingsClick = () => console.log("Settings clicked"),
  onTripClick = (tripId: string) => console.log("Trip clicked:", tripId),
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  userName = "John Doe",
}: HomeProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav
        onNewTrip={onNewTrip}
        onProfileClick={onProfileClick}
        onSettingsClick={onSettingsClick}
        userAvatar={userAvatar}
        userName={userName}
      />
      <main className="flex-1">
        <TripGrid onTripClick={onTripClick} />
      </main>
    </div>
  );
};

export default Home;

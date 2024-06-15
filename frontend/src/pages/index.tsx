import { Identity } from "@dfinity/agent";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { LogoutButton, useAuth, useCandidActor, useIdentities } from "@bundly/ares-react";
import { CandidActors } from "@app/canisters";
import Header from "@app/components/header";

type Profile = {
  username: string;
  bio: string;
};

export default function IcConnectPage() {
  const { isAuthenticated, currentIdentity, changeCurrentIdentity } = useAuth();
  const identities = useIdentities();
  const [profile, setProfile] = useState<Profile | undefined>();
  const [loading, setLoading] = useState(false); // State for loader
  const test = useCandidActor<CandidActors>("test", currentIdentity, {
    canisterId: process.env.NEXT_PUBLIC_TEST_CANISTER_ID,
  }) as CandidActors["test"];

  useEffect(() => {
    getProfile();
  }, [currentIdentity]);

  function formatPrincipal(principal: string): string {
    const parts = principal.split("-");
    const firstPart = parts.slice(0, 2).join("-");
    const lastPart = parts.slice(-2).join("-");
    return `${firstPart}-...-${lastPart}`;
  }

  function disableIdentityButton(identityButton: Identity): boolean {
    return currentIdentity.getPrincipal().toString() === identityButton.getPrincipal().toString();
  }

  async function getProfile() {
    try {
      const response = await test.getProfile();

      if ("err" in response) {
        if ("userNotAuthenticated" in response.err) console.log("User not authenticated");
        else console.log("Error fetching profile");
      }

      const profile = "ok" in response ? response.ok : undefined;
      setProfile(profile);
    } catch (error) {
      console.error({ error });
    }
  }

  async function registerProfile(username: string, bio: string) {
    try {
      setLoading(true); // Show loader
      const response = await test.createProfile(username, bio);

      if ("err" in response) {
        if ("userNotAuthenticated" in response.err) alert("User not authenticated");
        if ("profileAlreadyExists" in response.err) alert("Profile already exists");

        throw new Error("Error creating profile");
      }

      setProfile({ username, bio });
    } catch (error) {
      console.error({ error });
    } finally {
      setLoading(false); // Hide loader
    }
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-orange-500 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 shadow-md">
          <img src="/path-to-logo.png" alt="Logo" className="h-8" />
          <span className="ml-2 text-xl font-bold">VoxLegis</span>
        </div>
        <nav className="flex-grow mt-10">
          <a href="#" className="block px-4 py-2 text-white hover:bg-orange-600">Home</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-orange-600">Explorar</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-orange-600">Notificaciones</a>
          <a href="#" className="block px-4 py-2 text-white bg-orange-600">Perfil</a>
        </nav>
        <div className="p-4">
          <p className="text-sm">Made with love by VoxLegis</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-orange-50 p-8">
        <Header />
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-md rounded-lg p-6 w-2/3">
            <h2 className="text-2xl font-bold mb-4">User Name</h2>
            <div className="mb-4">
              <strong>Age:</strong> 25
            </div>
            <div className="mb-4">
              <strong>Name:</strong> John Doe
            </div>
            <div className="mb-4">
              <strong>Bio:</strong> Una breve descripción de la persona para conocer su opinión como ciudadano.
            </div>
            <button className="bg-black text-white px-4 py-2 rounded">Button</button>
          </div>
          <div className="ml-8">
            <img src="path-to-profile-pic.jpg" alt="Profile" className="w-48 h-48 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

// src/services/profileService.js

export const fetchProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8000/api/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  const data = await response.json();
  return data.user; // return only user
};

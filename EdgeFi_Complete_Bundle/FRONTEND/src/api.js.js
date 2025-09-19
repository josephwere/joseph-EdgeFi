const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPackages() {
  try {
    const res = await fetch(${API_URL}/api/packages);
    if (!res.ok) throw new Error(res.status);
    return await res.json();
  } catch (err) {
    console.error("Error fetching packages:", err);
    return [];
  }
}

export async function fetchUsers() {
  try {
    const res = await fetch(${API_URL}/api/users);
    if (!res.ok) throw new Error(res.status);
    return await res.json();
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
}

// Add more API calls as needed
// api/AdminServices.js
const AdminServices = {
  login: async (API_URL, username, password) => {
  const res = await fetch(`${API_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  // ✅ Save token if login was successful
  if (res.ok && data.access_token) {
    localStorage.setItem("adminToken", data.access_token);
  } else {
    // Optional: clear any stale token if login failed
    localStorage.removeItem("adminToken");
  }

  return data;
},

//jas

//  fetchMonthlyLogins: async (API_URL, token, year, month, source = "grid") => {
//     const url = `${API_URL}/admin/analytics/monthly-logins?year=${year}&month=${month}&source=${source}`;
//     const res = await fetch(url, {
//       headers: { "Authorization": `Bearer ${token}` }
//     });
//     if (!res.ok) throw new Error("Failed to fetch monthly logins");
//     return await res.json();
//   },


  fetchUsers: async (API_URL, token) => {
    const res = await fetch(`${API_URL}/admin/users`, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    return await res.json();
  },

  fetchJwtSessionsPaginated: async (API_URL, token, skip = 0, limit = 50) => {
    const res = await fetch(`${API_URL}/admin/jwt-sessions?skip=${skip}&limit=${limit}`, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    if (!res.ok) throw new Error("Failed to fetch JWT sessions");
    return await res.json();
  },

  fetchrecentJwtSessions: async (API_URL, token, skip = 0, limit = 10) => {
    const res = await fetch(`${API_URL}/admin/jwt-sessions?skip=${skip}&limit=${limit}`, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    if (!res.ok) throw new Error("Failed to fetch JWT sessions");
    return await res.json();
  },

  // fetchrecentSessions: async (API_URL, token, skip = 0, limit = 10) => {
  //   const res = await fetch(`${API_URL}/admin/sessions`, {
  //     headers: { "Authorization": `Bearer ${token}` }
  //   });
  //   if (!res.ok) throw new Error("Failed to fetch sessions");
  //   return await res.json();
  // },

  // fetchSessionsPaginated: async (API_URL, token, skip = 0, limit = 50) => {
  //   const res = await fetch(`${API_URL}/admin/sessions?skip=${skip}&limit=${limit}`, {
  //     headers: { "Authorization": `Bearer ${token}` }
  //   });
  //   if (!res.ok) throw new Error("Failed to fetch sessions");
  //   return await res.json();
  // },
  //jas


  toggleBlock: async (API_URL, token, username, block) => {
    console.log("AdminServices.toggleBlock called with:", {
      API_URL,
      username,
      block,
      tokenExists: !!token
    });

    try {
      const response = await fetch(`${API_URL}/admin/block-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          username: username,
          block: block
        }),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok) {
        throw new Error(responseData.detail || `HTTP ${response.status}: ${response.statusText}`);
      }

      return responseData;
    } catch (error) {
      console.error("Fetch error in toggleBlock:", error);
      throw error;
    }
  },

  revokeSession: async (API_URL, token, id) => {
    await fetch(`${API_URL}/admin/jwt-sessions/${id}/revoke`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      },
    });
  }
};

export default AdminServices;

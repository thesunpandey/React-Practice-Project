// Define an array of menu items
export const menus = [
    // Home menu item
    {
      label: "Home",
      to: "/",
    },
    // Profile menu item with nested children
    {
      label: "Profile",
      to: "/profile",
      children: [
        // Details submenu item with nested children
        {
          label: "Details",
          to: "details",
          children: [
            // Location submenu item with nested children
            {
              label: "Location",
              to: "location",
              children: [
                // City submenu item
                {
                  label: "City",
                  to: "city",
                },
              ],
            },
          ],
        },
      ],
    },
    // Settings menu item with nested children
    {
      label: "Settings",
      to: "/settings",
      children: [
        // Account submenu item
        {
          label: "Account",
          to: "account",
        },
        // Security submenu item with nested children
        {
          label: "Security",
          to: "security",
          children: [
            // Login submenu item
            {
              label: "Login",
              to: "login",
            },
            // Register submenu item with nested children
            {
              label: "Register",
              to: "register",
              children: [
                // Nested submenu item
                {
                  label: "Random data",
                  to: "",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  
  // Export the menus array
  export default menus;  
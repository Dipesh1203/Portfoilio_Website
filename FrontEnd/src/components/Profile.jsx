import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  return (
    <Stack spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="./src/assets/logo1.png"
        style={{ margin: "auto" }}
      />
    </Stack>
  );
};

export default Profile;

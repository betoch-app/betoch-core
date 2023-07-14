export const getFirstName = (full_name: string) => {
  if (full_name.includes(" ")) {
    const fullName = full_name.split(" ");
    return fullName[0];
  }
  return "";
};

export const getLastName = (full_name: string) => {
  if (full_name.includes(" ")) {
    const fullName = full_name.split(" ");
    return fullName[1];
  }

  return "";
};

export const getGreeting = () => {
  const today = new Date();
  const currentHour = today.getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

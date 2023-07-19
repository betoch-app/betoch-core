import { IPayment } from "../models/IPayment";

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

export const payments: IPayment[] = [
  {
    id: 1,
    title: "New Payment",
    color: "green",
  },
  {
    id: 2,
    title: "This week payment",
    color: "red",
  },
  {
    id: 3,
    title: "This month payment",
    color: "blue",
  },
  {
    id: 4,
    title: "Remaining payment",
    color: "yellow",
  },
];

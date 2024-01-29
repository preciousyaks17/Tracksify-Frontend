import { format } from "date-fns";

export const formatDatte = (inputDate: string): string => {
  const dateObject: Date = new Date(inputDate);
  const formattedDate: string = format(dateObject, "do, MMMM yyyy");
  return formattedDate;
};

export function formatTime(inputDate: string): string {
  const dateObject: Date = new Date(inputDate);
  const formattedTime: string = format(dateObject, "h:mm a");
  return formattedTime;
}

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};
export default formatDate;

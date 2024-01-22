const getStatus = (status: number) => {
  switch (status) {
    case 0:
      return "Pending";
    case 1:
      return "In Progress";
    case 2:
      return "Submitted";
    case 3:
      return "Completed";
    case 4:
      return "OverDue";
    default:
      return "Pending";
  }
};

export default getStatus;

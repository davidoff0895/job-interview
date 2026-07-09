export const getInitials = (fullName: string | null | undefined): string => {
  return fullName!
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
};


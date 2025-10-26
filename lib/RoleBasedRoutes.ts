export function canAccess(
  role: "ADMIN" | "STAFF" | "SUPER_ADMIN" | "BASIC",
  pathname: string
) {
  if (role === "SUPER_ADMIN") return true;
  if (role === "ADMIN") return pathname !== "/registration";

  if (role === "STAFF") {
    return (
      pathname.startsWith("/students") ||
      pathname.startsWith("/profile") ||
      pathname === "/"
    )&& (
      pathname !== "/registration" &&
      pathname !== "/students/new"
    );
  }

  return false;
}

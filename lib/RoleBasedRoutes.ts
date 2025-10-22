
export function canAccess(role: 'ADMIN' | 'STAFF' | 'SUPER_ADMIN', pathname: string) {
  if (role === "SUPER_ADMIN") return true;
  if (role === "ADMIN") return true;


  if (role === "STAFF") {
    return (
      pathname.startsWith("/api") ||
      pathname.startsWith("/subscription") ||
      pathname.startsWith("/pay") ||
      pathname === "/profile" 
    );
  }

  return false;
}

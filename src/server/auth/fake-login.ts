export function fakeLogin(username: string, password: string) {
  if (username === "admin" && password === "admin") {
    return { id: "1", name: "Admin", email: "admin@admin.com" };
  }
  return null;
}

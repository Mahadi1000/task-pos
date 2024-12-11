export default function authHeader() {
  // In a real application, you might get the token from localStorage or a secure cookie
  const token = "your-auth-token";
  return {
    Authorization: `Bearer ${token}`,
  };
}

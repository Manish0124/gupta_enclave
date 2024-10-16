import AuthProvider from "./AuthProvider";

export default function layout({ children }: { children: React.ReactNode }) {
    return <AuthProvider>{children}</AuthProvider>;
  }
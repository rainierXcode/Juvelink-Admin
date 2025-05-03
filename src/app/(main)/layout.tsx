import Sidebar from "@/components/ui/Sidebar";
import { AuthProvider } from "@/components/AuthProvider";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
      <AuthProvider>
        <Sidebar/> 
        <main className="ml-72 min-h-screen">
            {children}
        </main>
      </AuthProvider>
    );
  }
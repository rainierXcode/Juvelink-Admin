import Sidebar from "@/components/ui/Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Sidebar/> 
        <main className="ml-72 min-h-screen">
            {children}
        </main>
      </>
    );
  }
import { getUser } from "@/data/users";
import Header from "@/components/layouts/Header";
import Grid from "@/app/(main)/Grid";
import MainStats from "@/app/(main)/MainStats";
import { redirect } from "next/navigation";
import { canView } from "@/lib/permissions";
import CasePie from "./CasePie";

export default async function DashboardPage() {
    const user = await getUser();

    if (!user) {
        redirect("/login"); 
    }

    if(!canView('dashboard', user.role)){
         return <p>Access denied. You do not have permission to view inventory.</p>;
    }

    return (
        <div className="px-8 pt-4 font-poppins">
            <Header title="Dashboard" description={`Hello ${user?.name}, Welcome back`} />

            <Grid>
                <MainStats />
                <Grid className="col-span-6 p-0">
                    <div className="w-full col-span-6 flex justify-center items-center px-1.5 py-3">
                        <CasePie />
                    </div>
                    <div className="col-span-6">d</div>
                </Grid>
            </Grid>
        </div>
    );
}

import { getUser } from "@/data/users";
import Header from "@/components/layouts/Header";
import Grid from "@/components/Dashboard/Grid";
import MainStats from "@/components/Dashboard/MainStats";
import { redirect } from "next/navigation";
import { canView } from "@/lib/permissions";
import CasePie from "../../components/Dashboard/CasePie";
import AgeDistribution from "@/components/Dashboard/AgeDistribution";
import MonthlyNewAdmission from "@/components/Dashboard/MonthlyNewAdmission";
import MonthlyVisitors from "@/components/Dashboard/MontlyVisitors";

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

            <Grid className="grid-cols-11">
                <MainStats />
                <CasePie />
                <AgeDistribution />
            </Grid>

            <Grid className="grid-cols-11 h-[240px]">
                <MonthlyNewAdmission />
                <MonthlyVisitors />
            </Grid>

            <Grid>
                <div className="col-span-12 h-[200px]">
                    Hello
                </div>
            </Grid>
        </div>
    );
}

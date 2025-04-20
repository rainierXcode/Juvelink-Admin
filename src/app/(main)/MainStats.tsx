import { User } from "lucide-react";

export default function MainStats() {
    return (
        <div className="col-span-6 p-3">
            <div className="mb-4 text-sm font-semibold">Case Summary</div>
            <div className="grid grid-cols-12 gap-3">
                <StatCard
                    bg="#FFD8D9"
                    iconColor="#FF6D6F"
                    count={83}
                    title="Total Juvenile"
                    icon={<User className="w-full h-full text-white" />}
                />
                 <StatCard
                    bg="#FFF0D5"
                    iconColor="#FFC363"
                    count={0}
                    title="Ongoing Cases"
                    icon={<User className="w-full h-full text-white" />}
                />

                <StatCard
                    bg="#CEFFDF"
                    iconColor="#00E28F"
                    count={1}
                    title="Resolve Cases"
                    icon={<User className="w-full h-full text-white" />}
                />

                <StatCard
                    bg="#F2E0FF"
                    iconColor="#C26DFF  "
                    count={1}
                    title="Resolve Cases"
                    icon={<User className="w-full h-full text-white" />}
                />
            </div>
        </div>
    );
}

type StatCardProps = {
    bg: string;
    iconColor: string;
    icon: React.ReactNode;
    count: number;
    title: string;
};

function StatCard({ bg, iconColor, icon, count, title }: StatCardProps) {
    return (
        <div
            className="col-span-3 p-3 space-y-4 rounded-sm"
            style={{ backgroundColor: bg }}
        >
            <div className="w-6 h-6 rounded-full p-1 bg-[${iconColor}]"
            style={{ backgroundColor: iconColor }}>
                {icon}
            </div>
            <div className="text-sm font-semibold">{count}</div>
            <div className="mb-4 text-xs font-medium">{title}</div>
        </div>
    );
}

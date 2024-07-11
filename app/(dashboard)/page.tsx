import { DataGrid } from "@/components/data-grid";
import { DataCharts } from "@/components/data-charts";

export default function DashboardPage() {
    return (
        <div className="max-w-screen-2xl mx-auto pb-10 w-full -mt-24">
            <DataGrid />
            <DataCharts />
        </div>
    );
}

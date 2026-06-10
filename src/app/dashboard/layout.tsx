import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex pt-28 md:pt-32 xl:pt-24 ">
			<div className="w-[10%] h-screen border">
				<Sidebar />
			</div>

			<main className="flex-1 p-5">{children}</main>
		</div>
	);
};

export default DashboardLayout;

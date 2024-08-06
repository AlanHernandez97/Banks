import NavBar from "../components/navbar/NavBar";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
	return (
		<div className="w-full h-screen">
			< NavBar />
			<div className="flex">
				<div className="p-2 w-full text-slate-900">
					{children}
				</div>

			</div>
		</div >
	);
}
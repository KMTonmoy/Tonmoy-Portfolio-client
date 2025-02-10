
import Sidebar from "@/components/Sidebar/Sidebar";
import "../../app/globals.css";


export default function RootLayout({ children }) {
    return (
        <div>
            <div className="flex ">
                <Sidebar />
                <main className="flex justify-center w-full">{children}</main>
            </div>
        </div>
    );
}
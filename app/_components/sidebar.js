import NavigationBar from "./navbar";


export default function SideBar({children}) {

    return (
        <main className={`light flex bg-gray-50 text-gray-700 w-full min-h-screen`}>
            Side Bar
            <div>
                <NavigationBar />
                {children}
            </div>
        </main>

    )
}
import { Navbar } from "./components/navbar"
import { LittleVideo } from "./components/videoItem"
import { Sidebar } from "./components/sidebar"


function App() {
  return (
    <section className="h-screen w-full overflow-hidden">
      <Navbar />
      <div className="flex flex-row gap-4 w-full h-full">
        <section className="hidden md:block w-[16rem]">
          <Sidebar />
        </section>
        <main className="flex-1">
          <section className="text-white">tag zone</section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-6">
            {Array(6).fill().map((_, item) => (
              <LittleVideo key={item} />
            ))}
          </div>
        </main>
      </div>
    </section>
  )
}

export default App

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="min-h-[calc(100vh-60px)]">
     <Outlet />
      </main>
    </>
  );
}

export default App;

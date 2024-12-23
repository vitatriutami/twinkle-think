import React from "react";
import Layout from "./layout";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider
// import { Button } from "./components/ui/button";
import { DialogCloseButton } from "./components/dialog-close-button";
import { getInitialData, showFormattedDate } from "./utils";

function App() {
  // const [count, setCount] = useState(0)
  const notes = getInitialData();

  return (
    <>
      <SidebarProvider>
        <Layout>
          <h1 className="text-4xl font-bold text-pink-500">
            Welcome to the App
          </h1>
          <p>This is your main content area.</p>
          <div className="fixed bottom-10 right-10">
            <DialogCloseButton />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div
                key={note.id}
                className="border border-gray-200 rounded-lg p-4 shadow-md bg-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
                  <p className="text-gray-700 mb-4">{note.body}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {showFormattedDate(note.createdAt)}
                </p>
                {note.archived && (
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-red-800 bg-red-200 rounded-full">
                    Archived
                  </span>
                )}
              </div>
            ))}
          </div>
        </Layout>
      </SidebarProvider>
    </>
  );
}

export default App;

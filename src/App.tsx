import React, { useState } from "react";
import Layout from "./layout";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider
// import { Button } from "./components/ui/button";
import DialogCloseButton from "./components/dialog-close-button";
import { getInitialData, showFormattedDate } from "./utils";
// import MynauiTrashSolid from "@/assets/trash.svg";

type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
};

const MynauiTrash = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-black hover:text-slate-800"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m5.25 5.778l1.727 12.178c.09.579.329 1.12.691 1.564a3 3 0 0 0 1.363.95l.246.083a8.52 8.52 0 0 0 5.446 0l.246-.082c.528-.178 1-.506 1.362-.95s.602-.985.692-1.564l1.727-12.18"></path>
      <path d="M12 7.5c3.728 0 6.75-.784 6.75-1.75S15.728 4 12 4s-6.75.784-6.75 1.75S8.272 7.5 12 7.5"></path>
    </g>
  </svg>
);

const MynauiArchive = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-black hover:text-slate-700"
  >
    <path
      fill="currentColor"
      d="M16.76 2.25a2.75 2.75 0 0 1 2.462 1.526a1 1 0 0 1 .051.135l2.163 7.846a8.8 8.8 0 0 1 .314 2.325V19A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19v-4.918c0-.785.106-1.567.314-2.325l2.163-7.846a1 1 0 0 1 .051-.135A2.75 2.75 0 0 1 7.24 2.25zm.31 11.5a1.25 1.25 0 0 0-1.04.557l-.812 1.218a2.75 2.75 0 0 1-2.288 1.225h-1.86a2.75 2.75 0 0 1-2.288-1.225l-.812-1.218a1.25 1.25 0 0 0-1.04-.557H3.758q-.008.165-.008.332V19A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-4.918q0-.165-.008-.332zm-6.57-8a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-1.5 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);

const MynauiUndoArchive = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-black hover:text-slate-800"
  >
    <path
      fill="currentColor"
      d="M16.76 2.25a2.75 2.75 0 0 1 2.462 1.526a1 1 0 0 1 .051.135l2.163 7.846a8.8 8.8 0 0 1 .314 2.325V19A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19v-4.918c0-.785.106-1.567.314-2.325l2.163-7.846a1 1 0 0 1 .051-.135A2.75 2.75 0 0 1 7.24 2.25zm.31 11.5a1.25 1.25 0 0 0-1.04.557l-.812 1.218a2.75 2.75 0 0 1-2.288 1.225h-1.86a2.75 2.75 0 0 1-2.288-1.225l-.812-1.218a1.25 1.25 0 0 0-1.04-.557H3.758q-.008.165-.008.332V19A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-4.918q0-.165-.008-.332zm-6.57-8a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-1.5 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);

function App() {
  const [notes, setNotes] = useState<Note[]>(getInitialData());
  const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
  const [searchText, setSearchText] = useState("");

  const handleDeleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    setCurrentNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleArchiveToggle = (id: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
    setCurrentNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = [...notes, ...currentNotes].filter(
    (note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase()) ||
      note.body.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SidebarProvider>
      <Layout searchText={searchText} setSearchText={setSearchText}>
        <h1 className="text-4xl font-bold text-pink-500">Welcome to the App</h1>
        <p>This is your main content area.</p>
        <div className="fixed bottom-10 right-10">
          <DialogCloseButton
            currentNotes={currentNotes}
            setCurrentNotes={setCurrentNotes}
          />
        </div>
        <div>
          {filteredNotes.length === 0 ? (
            <p className="flex items-center justify-center text-2xl font-semibold h-[50vh]">
              No notes to display
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className={`border border-gray-200 rounded-lg p-4 shadow-md ${
                    note.archived ? "bg-neutral-100" : "bg-white"
                  } flex flex-col justify-between`}
                >
                  <div className="flex-row-reverse justify-between items-center py-2">
                    {note.archived && (
                      <span className="px-3 py-1 text-xs font-bold text-red-800 rounded-full bg-red-100">
                        Archived!
                      </span>
                    )}
                    <div className="flex gap-1 justify-end">
                      <button
                        onClick={() => handleArchiveToggle(note.id)}
                        className={`p-1 border rounded-full flex justify-center items-center ${
                          note.archived
                            ? "bg-amber-300 hover:bg-amber-200"
                            : "bg-gray-300 hover:bg-gray-200"
                        }`}
                        title={note.archived ? "Undo archive" : "Archive"}
                      >
                        {note.archived ? (
                          <MynauiUndoArchive />
                        ) : (
                          <MynauiArchive />
                        )}
                      </button>
                      <button
                        onClick={() => handleDeleteNote(note.id)}
                        className="bg-pink-400 hover:bg-pink-300 p-1 border rounded-full flex justify-center items-center"
                        title="Delete note"
                      >
                        <MynauiTrash />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
                  <p className="text-gray-700 mb-4">{note.body}</p>
                  <p className="text-sm text-gray-500">
                    {showFormattedDate(note.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </SidebarProvider>
  );
}

export default App;

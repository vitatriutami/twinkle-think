// import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
// import { Label } from "@/components/ui/label";
import React, { useState } from "react";

type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
};

type FormProps = {
  currentNotes: Note[];
  setCurrentNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const DialogCloseButton: React.FC<FormProps> = ({
  currentNotes,
  setCurrentNotes,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const MAX_TITLE_LENGTH = 30;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length > MAX_TITLE_LENGTH) {
      // Show toast notification
      toast({
        description: "Title characters exceed the limit!",
        variant: "destructive",
      });
      // return; prevent updating the store
    }

    setTitle(inputValue); // update state if within limit
  };

  const handleAddNote = () => {
    if (title && body) {
      const newNote: Note = {
        id: Date.now(), // Generates a unique ID
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      };
      setCurrentNotes([...currentNotes, newNote]);
      setTitle("");
      setBody("");

      // Show toast notification
      toast({
        description: "Your note has been sent!",
        className:
          "bg-pink-300 text-black text-xl font-semibold border-2 border-black",
      });

      // Close dialog
      setIsOpen(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="p-6 font-bold border-2 border-black text-2xl rounded-full bg-pink-500 text-yellow-200 hover:bg-yellow-200 hover:text-pink-500"
        >
          Add Note
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a New Note</DialogTitle>
          <DialogDescription>Write down what you think.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-2 w-full">
          {/* <Input>Judul</Input> */}
          <Input
            type="text"
            placeholder="Enter title here..."
            value={title}
            onChange={handleTitleChange}
            className="border rounded p-2 w-full"
          />
          <textarea
            placeholder="Enter note here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border rounded p-2 w-full"
          />
          {/* <div className="grid flex-1 gap-2">
            <Label htmlFor="title" className="sr-only">
              Title
            </Label>
            <Input id="title" placeholder="Enter title..." onChange={} />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="title" className="sr-only">
              Note
            </Label>
            <Input
              id="title"
              placeholder="Enter a note here..."
              onChange={handleChange}
              value={note}
            />
          </div> */}
        </div>
        <DialogFooter className="sm:justify-end flex gap-2">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
          <Button type="submit" onClick={handleAddNote}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCloseButton;

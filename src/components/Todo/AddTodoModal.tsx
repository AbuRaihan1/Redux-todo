import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AddTodoModal = () => {
  const [task, setTask] = useState([]);
  const [description, setDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log({ task, description });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>Type your todo here</DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={handleAddTask}>
          <div className="grid gap-4 py-4">
            <div className="">
              <Label htmlFor="name" className="text-left mb-1 block">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="items-center gap-4">
              <Label htmlFor="username" className="text-left mb-1 block">
                Description
              </Label>
              <Textarea
                onBlur={(e) => setDescription(e.target.value)}
                placeholder="Type your message here."
              />
            </div>
          </div>

          <DialogClose asChild>
            <Button type="submit">Save Changes</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;

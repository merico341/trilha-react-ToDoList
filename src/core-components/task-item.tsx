import React from "react";
import InputText from "../components/input-text";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckBox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash.svg?react";
import PencilIcon from "../assets/icons/Pencil.svg?react";
import XIcon from "../assets/icons/X.svg?react";
import CheckIcon from "../assets/icons/Check.svg?react";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemProps {
  task: Task;
}

export default function TaksItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task.state === TaskState.Creating
  );
  const [taskTitle, setTaskTitle] = React.useState(task.title || "");
  const {updateTask} = useTask();

  function hadleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateTask(task.id, {title: taskTitle})
    setIsEditing(false);
  }

  return (
    <Card size={"md"} >
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckBox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon type="button" icon={TrashIcon} variant={"tertiary"} />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              variant={"tertiary"}
              onClick={hadleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant={"secondary"}
              onClick={handleExitEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant={"primary"} />
          </div>
        </form>
      )}
    </Card>
  );
}

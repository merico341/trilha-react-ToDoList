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

interface TaskItemProps {
  task: Task;
}

export default function TaksItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task.state === TaskState.Creating
  );

  function hadleEditTask() {
    setIsEditing(true);
  }

  function hadleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size={"md"} className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckBox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
          />
          <Text
            className={cx("flex-1", {
              'line-through': task?.concluded
            })}
          >
            porra {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
            <ButtonIcon
              icon={PencilIcon}
              variant={"tertiary"}
              onClick={hadleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant={"secondary"}
              onClick={hadleExitEditTask}
            />
            <ButtonIcon icon={CheckIcon} variant={"secondary"} />
          </div>
        </>
      )}
    </Card>
  );
}

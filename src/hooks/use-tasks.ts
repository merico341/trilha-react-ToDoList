import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTask] = React.useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTask(false);
    }

    setTasks(tasksData);
  }

  React.useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    createTasksCount: tasks.filter((task) => task.state === TaskState.Created)
      .length,
    concludedTaskCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}

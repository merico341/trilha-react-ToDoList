import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

    return {
        tasks,
        createTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
        concludedTaskCount: tasks.filter((task) => task.concluded).length
    }
}
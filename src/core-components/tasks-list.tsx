import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus.svg?react";
import TaksItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";

export default function TasksList() {
    const { tasks } = useTasks();
    const { prepareTask } = useTask();

    console.log(tasks);

    function handleNewTask() {
        prepareTask()
    }

    return (
        <>
            <section>
                <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>Nova tarefa</Button>
            </section>

            <section className="space-y-2">
                <TaksItem />
                <TaksItem />
                <TaksItem />
                <TaksItem />
            </section>
        </>
    )
}
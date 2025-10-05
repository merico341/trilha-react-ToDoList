import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus.svg?react";
import TaksItem from "./task-item";
import useTasks from "../hooks/use-tasks";

export default function TasksList() {
    const { tasks } = useTasks();

    console.log(tasks);

    return (
        <>
            <section>
                <Button icon={PlusIcon} className="w-full">Nova tarefa</Button>
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
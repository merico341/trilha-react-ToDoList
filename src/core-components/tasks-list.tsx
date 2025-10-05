import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus.svg?react";
import TaksItem from "./task-item";

export default function TasksList() {
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
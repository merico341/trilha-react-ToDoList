import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckBox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from '../assets/icons/Trash.svg?react';
import PencilIcon from '../assets/icons/Pencil.svg?react';
import XIcon from '../assets/icons/X.svg?react';
import CheckIcon from '../assets/icons/Check.svg?react';
import React from "react";
import InputText from "../components/input-text";

export default function TaksItem() {
    const [isEditing, setIsEditing] = React.useState(false);

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
                    <InputCheckBox />
                    <Text className="flex-1">🛒  Fazer compras da semana</Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon}  variant={"tertiary"} />
                        <ButtonIcon icon={PencilIcon}  variant={"tertiary"} onClick={hadleEditTask} />
                    </div>
                </>
            ) : (
                <>
                    <InputText  className="flex-1"/>
                    <div className="flex gap-1">
                            <ButtonIcon icon={XIcon}  variant={"secondary"} onClick={hadleExitEditTask} />
                            <ButtonIcon icon={CheckIcon}  variant={"secondary"} />
                    </div>
                </>
            )

            }
        </Card>
    )
}
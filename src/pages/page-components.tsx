import Text from "../components/text";
import Icon from "../components/icon"
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import InputCheckBox from "../components/input-checkbox";
import Card from "../components/card";
import Container from "../components/container";
import Skeleton from "../components/skeleton";
import CheckIcon from "../assets/icons/Check.svg?react";
import PensilIcon from "../assets/icons/Pencil.svg?react";
import PlusIcon from "../assets/icons/Plus.svg?react";
import SpinnerIcon from "../assets/icons/Spinner.svg?react";
import TrashIcon from "../assets/icons/Trash.svg?react";
import XIcon from "../assets/icons/X.svg?react";

export default function PageComponents() {
    return (
    <Container>
      <div className="grid gap-3">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá mundo
          </Text>
          <Text className="text-green-base">
            Olá mundo
          </Text>
          <Text variant="body-md">
            Olá mundo
          </Text>
          <Text>Levar o dog pra passear</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base"/>
          <Icon svg={CheckIcon}/>
          <Icon svg={PlusIcon}/>
          <Icon svg={SpinnerIcon} animate/>
          <Icon svg={PensilIcon}/>
          <Icon svg={XIcon}/>
        </div>

        <div className="flex gap-1">
          <Badge variant={'secondary'}>5</Badge>
          <Badge variant={'primary'}>2 de 5</Badge>

          <Badge loading>loading</Badge>
        </div>

        <div><Button icon={PlusIcon}> nova tarefa</Button></div>

        <div>
          <ButtonIcon icon={TrashIcon}/>
          <ButtonIcon icon={TrashIcon} variant={"secondary"}/>
          <ButtonIcon icon={TrashIcon} variant={"tertiary"}/>
          <ButtonIcon icon={TrashIcon} loading/>
        </div>

        <div>
          <InputText />
        </div>

        <div className="flex">
          <InputCheckBox />
          <InputCheckBox loading/>
        </div>

        <div>
          <Card size="md">Olá mundo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6"/>
          <Skeleton className="h-6"/>
          <Skeleton className="w-96 h-6"/>
        </div>
      </div>
    </Container>
  )
}
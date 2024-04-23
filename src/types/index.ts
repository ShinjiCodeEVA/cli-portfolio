import { IconType } from "react-icons";


export type CmdHistory = {
    cmd: string;
    Component?: React.ReactNode;
    date: string;
}

export type HelpCmd = {
    cmd: string;
    detail: string;
}

export type SkillType = {
    icon: IconType;
    label: string;
    percentage: number;
    max: number;
} 
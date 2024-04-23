import { CmdHistory } from "../../../types";

export interface CmdBaseInputProp {
    Children: React.ReactNode;
    CmdStatus?: React.ReactNode;
    cmdDetails?: CmdHistory;
}

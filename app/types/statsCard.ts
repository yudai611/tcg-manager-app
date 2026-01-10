import { IconType } from "react-icons";

export type StatsItem = {
    title: string;
    total: number;
    diff?: number;
    icon: IconType;
    isPrice: boolean;
    hideDiff: boolean;
  };
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import {
    endOfYesterday,
    startOfMonth,
    startOfWeek,
    subMonths,
    subWeeks,
} from "date-fns";
import { FilterList, FilterListItem } from "react-admin";

export const LastVisitedFilter = () => (
    <FilterList label="Last visited" icon={<AccessTimeIcon />}>
        <FilterListItem
            label="Today"
            value={{
                last_seen_gte: endOfYesterday().toISOString(),
                last_seen_lte: undefined,
            }}
        />
        <FilterListItem
            label="This week"
            value={{
                last_seen_gte: startOfWeek(new Date()).toISOString(),
                last_seen_lte: undefined,
            }}
        />
        <FilterListItem
            label="Last week"
            value={{
                last_seen_gte: subWeeks(
                    startOfWeek(new Date()),
                    1
                ).toISOString(),
                last_seen_lte: startOfWeek(new Date()).toISOString(),
            }}
        />
        <FilterListItem
            label="This month"
            value={{
                last_seen_gte: startOfMonth(new Date()).toISOString(),
                last_seen_lte: undefined,
            }}
        />
        <FilterListItem
            label="Last month"
            value={{
                last_seen_gte: subMonths(
                    startOfMonth(new Date()),
                    1
                ).toISOString(),
                last_seen_lte: startOfMonth(new Date()).toISOString(),
            }}
        />
        <FilterListItem
            label="Earlier"
            value={{
                last_seen_gte: undefined,
                last_seen_lte: subMonths(
                    startOfMonth(new Date()),
                    1
                ).toISOString(),
            }}
        />
    </FilterList>
);

import React from "react";
import { useTheme } from "@mui/material/styles";
import {
    IconButton,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    useMediaQuery,
} from "@mui/material";
import { ModelSortDirection } from "../../../API";
import DaysSelection, { Days } from "../../../components/DaysSelection";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { DateRangePicker, DateRange } from "@mui/lab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type TaskHistoryControlsProps = {
    sortDirection: ModelSortDirection;
    setSortDirection: (sortDirection: ModelSortDirection) => void;
    setDateRange(startDate: Date, endDate: Date): void;
    isFetching: boolean;
};

const TaskHistoryControls: React.FC<TaskHistoryControlsProps> = ({
    sortDirection,
    setSortDirection,
    setDateRange,
    isFetching,
}) => {
    const [days, setDays] = React.useState<Days | null>(null);
    const [customDaysRange, setCustomDaysRange] = React.useState<
        DateRange<Date>
    >([new Date(), new Date()]);

    const handleChangeDays = (newDays: Days) => {
        if (days === newDays) {
            setDays(null);
            setDateRange(new Date("2000-01-01"), new Date());
        } else if (newDays === Days.CUSTOM) {
            setDays(newDays);
            setCustomDaysRange([new Date(), new Date()]);
            setDateRange(new Date(), new Date());
        } else {
            setDays(newDays);
            const startDate = new Date("2000-01-01");
            const endDate = new Date();
            endDate.setDate(endDate.getDate() - newDays);
            setDateRange(startDate, endDate);
        }
    };

    const handleDateChange = (newDateRange: DateRange<Date>) => {
        setCustomDaysRange(newDateRange);
        if (newDateRange[0] && newDateRange[1]) {
            setDateRange(newDateRange[0], newDateRange[1]);
        }
    };

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));

    const customRange = days === Days.CUSTOM;

    return (
        <Paper
            sx={{
                borderRadius: 4,
                maxWidth: 800,
                padding: 1,
            }}
        >
            <Stack
                sx={{ minHeight: 80 }}
                direction={isSm ? "column" : "row"}
                alignItems={isSm ? "flex-start" : "center"}
                spacing={1}
            >
                <Select
                    data-testid="task-history-sort-direction-select"
                    sx={{
                        width: 200,
                        borderRadius: 2,
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "orange",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "orange",
                        },
                    }}
                    size="small"
                    value={sortDirection}
                >
                    <MenuItem
                        value="DESC"
                        onClick={() => {
                            setSortDirection(ModelSortDirection.DESC);
                        }}
                    >
                        Newest
                    </MenuItem>
                    <MenuItem
                        value="ASC"
                        onClick={() => {
                            setSortDirection(ModelSortDirection.ASC);
                        }}
                    >
                        Oldest
                    </MenuItem>
                </Select>
                {!customRange && (
                    <DaysSelection
                        value={days}
                        onChange={handleChangeDays}
                        showCustom
                    />
                )}
                {customRange && (
                    <Stack direction="row">
                        <DateRangePicker
                            startText="From"
                            inputFormat="dd/MM/yyyy"
                            endText="To"
                            value={customDaysRange}
                            onChange={handleDateChange}
                            renderInput={(startProps, endProps) => (
                                <Stack spacing={1} direction="row">
                                    <TextField
                                        {...startProps}
                                        size="small"
                                        inputProps={{
                                            ...startProps.inputProps,
                                            "aria-label": "Start date",
                                        }}
                                    />
                                    <TextField
                                        {...endProps}
                                        size="small"
                                        inputProps={{
                                            ...endProps.inputProps,
                                            "aria-label": "End date",
                                        }}
                                    />
                                </Stack>
                            )}
                        />
                        <IconButton
                            aria-label="back to days selection"
                            onClick={() => {
                                handleChangeDays(Days.CUSTOM);
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    </Stack>
                )}
                {isFetching && <LoadingSpinner delay={800} progress={0} />}
            </Stack>
        </Paper>
    );
};

export default TaskHistoryControls;

import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
  ChevronDownIcon,
} from "@gluestack-ui/themed";

interface DateSelectorsProps {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  selectedWeek: string;
  setSelectedWeek: (week: string) => void;
  months: string[];
  weeks: string[];
}

const DateSelectors: React.FC<DateSelectorsProps> = ({
  selectedMonth,
  setSelectedMonth,
  selectedWeek,
  setSelectedWeek,
  months,
  weeks,
}) => {
  return (
    <View style={styles.dateSelectors}>
      <View style={styles.selectorContainer}>
        <Select selectedValue={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger style={styles.selectTrigger}>
            <SelectInput value={selectedMonth} placeholder="Select month" />
            <SelectIcon as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {months.map((month) => (
                <SelectItem key={month} label={month} value={month} />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>
      </View>

      <View style={styles.selectorContainer}>
        <Select selectedValue={selectedWeek} onValueChange={setSelectedWeek}>
          <SelectTrigger style={styles.selectTrigger}>
            <SelectInput value={selectedWeek} placeholder="Select week" />
            <SelectIcon as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {weeks.map((week) => (
                <SelectItem key={week} label={week} value={week} />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateSelectors: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  selectorContainer: {
    flex: 1,
  },
  selectTrigger: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#EEE",
  },
});

export default DateSelectors;

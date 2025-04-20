import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import {
  Box,
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

const MonthTabs = () => {
  const [activeTab, setActiveTab] = useState("Expenses");
  const [selectedMonth, setSelectedMonth] = useState("June");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      px="$4"
      my="$2"
      width="100%"
    >
      {/* Tabs Container */}
      <Box
        flex={1}
        flexDirection="row"
        bg="white"
        borderRadius="$full"
        p="$1"
        mr="$3"
        shadowColor="$black"
        shadowOffset={{ width: 0, height: 1 }}
        shadowOpacity={0.1}
        shadowRadius={2}
        elevation={2}
      >
        {["Expenses", "Income"].map((tab) => (
          <Pressable
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={{
              flex: 1,
              borderRadius: 9999,
              backgroundColor: activeTab === tab ? "black" : "transparent",
              paddingVertical: 8,
              paddingHorizontal: 12,
              minWidth: 0, // Ensures text truncation works
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                textAlign: "center",
                color: activeTab === tab ? "white" : "black",
                fontWeight: activeTab === tab ? "600" : "500",
                fontSize: 12,
                lineHeight: 16,
              }}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </Box>

      {/* Month Dropdown */}
      <Box minWidth={100}>
        <Select selectedValue={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger
            variant="unstyled"
            size="sm"
            borderWidth={1}
            borderColor="$borderLight200"
            borderRadius="$full"
            px="$3"
            bg="white"
          >
            <SelectInput
              value={selectedMonth}
              placeholder="Select month"
              color="$black"
              fontWeight="$medium"
              fontSize="$xs"
              px="$1"
            />
            <SelectIcon as={ChevronDownIcon} ml="$1" size="sm" />
          </SelectTrigger>

          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {months.map((month) => (
                <SelectItem
                  key={month}
                  label={month}
                  value={month}
                  fontSize="$sm"
                />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>
      </Box>
    </Box>
  );
};

export default MonthTabs;

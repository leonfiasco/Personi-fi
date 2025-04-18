import { Box, ScrollView } from "@gluestack-ui/themed";
import {
  Card,
  DashboardBtns,
  NavBar,
  NavigationTabs,
  Transactions,
} from "../../components";

export default function HomeScreen() {
  return (
    <Box flex={1} bg="$background">
      <NavBar />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }} // Add some bottom padding
        showsVerticalScrollIndicator={false} // Hide scroll indicator if desired
      >
        <NavigationTabs />
        <Card />
        <DashboardBtns />
        <Transactions />
      </ScrollView>
    </Box>
  );
}

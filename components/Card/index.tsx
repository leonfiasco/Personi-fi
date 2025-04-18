import { Box, Text, HStack, VStack } from "@gluestack-ui/themed";

export default function Card({}) {
  return (
    <Box
      bg="$futuristicAccent"
      mx="$4"
      p="$4"
      rounded="$xl"
      shadowColor="$futuristicAccent"
      overflow="hidden" // Needed for the circles to be properly cut off
      position="relative" // For absolute positioning of circles
    >
      {/* Background circles - positioned absolutely */}
      <Box
        position="absolute"
        top={-50}
        right={-50}
        width={200}
        height={200}
        borderRadius={100}
        borderWidth={1}
        borderColor="$oliveGreen"
        opacity={0.6}
      />
      <Box
        position="absolute"
        bottom={-30}
        left={-30}
        width={150}
        height={150}
        borderRadius={75}
        borderWidth={1}
        borderColor="$oliveGreen"
        opacity={0.6}
      />
      <Box
        position="absolute"
        bottom={-50}
        left={-80}
        width={150}
        height={150}
        borderRadius={75}
        borderWidth={1}
        borderColor="$oliveGreen"
        opacity={0.6}
      />

      {/* Card content remains the same */}
      <VStack alignItems="center" mb="$4">
        <Text color="$textDark" fontSize="$md" mb="$6">
          Current Total 💰
        </Text>
        <Text color="$textDark" fontSize="$3xl" fontWeight="$bold">
          $8,270.00
        </Text>
      </VStack>
      <VStack alignItems="center" mb="$4">
        <Text color="$textDark" fontSize="$sm">
          Updated: 12/04/25
        </Text>
      </VStack>
      {/* White rectangle with split sections */}
      <Box bg="$white" rounded="$lg" overflow="hidden">
        <HStack>
          {/* Income Section (50%) */}
          <Box
            flex={1}
            p="$3"
            alignItems="center"
            borderRightWidth={1}
            borderRightColor="$trueGray200"
          >
            <Text color="#8aa908" fontWeight="$bold">
              Income
            </Text>
            <Text fontSize="$xl" mt="$1">
              $5,420.00
            </Text>
          </Box>

          {/* Outgoing Section (50%) */}
          <Box flex={1} p="$3" alignItems="center">
            <Text color="#9a161b" fontWeight="$bold">
              Expense
            </Text>
            <Text fontSize="$xl" mt="$1">
              $2,850.00
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";

import { styles } from "./styles.module";
import { IBudgetModal } from "@/types";

type props = {
  showBudgetModal: boolean;
  setShowBudgetModal: React.Dispatch<React.SetStateAction<boolean>>;
  weeklyBudget: number;
  setWeeklyBudget: React.Dispatch<React.SetStateAction<number>>;
};

const BudgetModal: React.FC<IBudgetModal> = ({
  showBudgetModal,
  setShowBudgetModal,
  weeklyBudget,

  setWeeklyBudget,
}: props) => {
  const [newBudget, setNewBudget] = useState("");

  const handleSetBudget = () => {
    const num = parseFloat(newBudget);
    if (!isNaN(num) && num > 0) {
      setWeeklyBudget(num);
      setShowBudgetModal(false);
      setNewBudget("");
    } else {
      Alert.alert("Invalid Budget", "Please enter a valid positive number");
    }
  };
  return (
    <Modal visible={showBudgetModal} animationType="fade" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.budgetModal}>
          <Text style={styles.modalTitle}>
            {weeklyBudget <= 0 ? "Set Your Weekly Budget" : "Update Budget"}
          </Text>
          <TextInput
            style={styles.budgetInput}
            keyboardType="numeric"
            placeholder="Enter weekly budget amount"
            value={newBudget}
            onChangeText={setNewBudget}
            autoFocus
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setShowBudgetModal(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.saveButton]}
              onPress={handleSetBudget}
            >
              <Text style={styles.modalButtonText}>
                {weeklyBudget <= 0 ? "Set Budget" : "Update"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BudgetModal;

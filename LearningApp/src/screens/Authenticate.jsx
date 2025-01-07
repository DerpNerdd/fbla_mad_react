import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import "../styles/AuthenticateStyles.css"; // Import CSS styles

const Authenticate = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  // Handle input changes
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (isLoginMode) {
      console.log("Login:", formData.email, formData.password);
      Alert.alert("Login Clicked", `Email: ${formData.email}`);
    } else {
      if (formData.password !== formData.confirmPassword) {
        Alert.alert("Error", "Passwords do not match");
        return;
      }
      console.log("Signup:", formData);
      Alert.alert("Signup Clicked", `Name: ${formData.name}`);
    }
  };

  return (
    <View className="container">
      <Text className="headerText">JOLT</Text>
      <View className="btnContainer">
        <TouchableOpacity
          className={`btn ${isLoginMode ? "active" : ""}`}
          onPress={() => setIsLoginMode(true)}
        >
          <Text className="btnText">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`btn ${!isLoginMode ? "active" : ""}`}
          onPress={() => setIsLoginMode(false)}
        >
          <Text className="btnText">Signup</Text>
        </TouchableOpacity>
      </View>

      <View className="formSection">
        {isLoginMode ? (
          <View className="loginBox">
            <TextInput
              className="input"
              placeholder="youremail@email.com"
              value={formData.email}
              onChangeText={(value) => handleChange("email", value)}
            />
            <TextInput
              className="input"
              placeholder="password"
              secureTextEntry
              value={formData.password}
              onChangeText={(value) => handleChange("password", value)}
            />
            <TouchableOpacity className="submitBtn" onPress={handleSubmit}>
              <Text className="submitText">Login</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="signupBox">
            <TextInput
              className="input"
              placeholder="Enter your name"
              value={formData.name}
              onChangeText={(value) => handleChange("name", value)}
            />
            <TextInput
              className="input"
              placeholder="youremail@email.com"
              value={formData.email}
              onChangeText={(value) => handleChange("email", value)}
            />
            <TextInput
              className="input"
              placeholder="password"
              secureTextEntry
              value={formData.password}
              onChangeText={(value) => handleChange("password", value)}
            />
            <TextInput
              className="input"
              placeholder="Confirm password"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(value) => handleChange("confirmPassword", value)}
            />
            <TouchableOpacity className="submitBtn" onPress={handleSubmit}>
              <Text className="submitText">Signup</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Authenticate;

import messaging from "@react-native-firebase/messaging";
import { Alert, Platform } from "react-native";

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Notification permission enabled");
    getFcmToken();
  }
}

async function getFcmToken() {
  const token = await messaging().getToken();
  console.log("FCM TOKEN:", token);
}

export function setupBackgroundHandler() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log("Message handled in background!", remoteMessage);
  });
}

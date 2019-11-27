import { AsyncStorage } from "react-native";
import { DECK_STORAGE_KEY } from "./api";
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

const NOTIFICATION_KEY = "FlashCards:notifications";

export function getDailyReminderValue() {
  return {
    today: "👋 Don't forget to study for today!"
  };
}

export function clearLocalNotification() {
  console.log('localNotification cleared')
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification() {
  console.log('localNotification created')
  return {
    title: "Study for your next exam!",
    body: "Don't forget to study today",
    sound: true,
    priority: "high",
    sticky: false,
    vibrate: true
  };
}

export function setLocalNotification() {
  console.log('localNotification set')
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

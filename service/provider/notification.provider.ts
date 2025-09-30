"use client";
/*
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/solid";

// Define the shape of a single notification
interface Notification {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

// Define the shape of the context's value
interface NotificationContextType {
  showNotification: (message: string, type: Notification['type']) => void;
}

// Create the context
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Define the props for the provider
interface NotificationProviderProps {
  children: ReactNode;
}

// Map notification types to Tailwind CSS classes and icons
const typeClasses = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
};

const typeIcons = {
  success: <CheckCircleIcon className="w-6 h-6 text-white" />,
  error: <XCircleIcon className="w-6 h-6 text-white" />,
  info: <InformationCircleIcon className="w-6 h-6 text-white" />,
  warning: <ExclamationCircleIcon className="w-6 h-6 text-white" />,
};

// The main provider component
export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Function to show a new notification
  const showNotification = (message: string, type: Notification['type']) => {
    const newNotification: Notification = {
      id: Math.random().toString(36).substring(2, 9),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  // Function to dismiss a notification
  const dismiss = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Automatically dismiss notifications after a delay
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        setNotifications((prev) => prev.slice(1));
      }, 5000); // Dismiss after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [notifications]);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-4 p-4 rounded-lg shadow-lg text-white ${typeClasses[notification.type]}`}
            >
              <div className="flex-shrink-0">
                {typeIcons[notification.type]}
              </div>
              <p className="flex-grow text-sm font-semibold">{notification.message}</p>
              <button onClick={() => dismiss(notification.id)}>
                <XCircleIcon className="w-4 h-4 text-white" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};

// Custom hook to use the notification service
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
*/
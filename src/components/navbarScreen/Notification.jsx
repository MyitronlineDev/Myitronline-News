import React, { useMemo, useState } from "react";
import {
  Bell,
  CheckCircle,
  AlertTriangle,
  Info,
  XCircle,
  Check,
  Trash2,
} from "lucide-react";

/* ================= DATA ================= */
const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    title: "Payment successful",
    message: "Your payment of $49.99 has been processed successfully.",
    time: "10m",
    type: "success",
    read: false,
    category: "billing",
  },
  {
    id: 2,
    title: "Server maintenance",
    message: "Scheduled maintenance will occur on Saturday at 2:00 AM UTC.",
    time: "1h",
    type: "warning",
    read: false,
    category: "system",
  },
  {
    id: 3,
    title: "New message",
    message: "You have received a new message from Sarah Johnson.",
    time: "2h",
    type: "info",
    read: true,
    category: "messages",
  },
  {
    id: 4,
    title: "Invoice generated",
    message: "Your invoice for March is now available.",
    time: "Yesterday",
    type: "info",
    read: false,
    category: "billing",
  },
  {
    id: 5,
    title: "Security alert",
    message: "A new login was detected on your account.",
    time: "Yesterday",
    type: "warning",
    read: true,
    category: "system",
  },
];

const FILTERS = ["all", "unread", "billing", "system", "messages"];

const ICON = {
  success: <CheckCircle className="w-4 h-4 text-emerald-500" />,
  warning: <AlertTriangle className="w-4 h-4 text-amber-500" />,
  error: <XCircle className="w-4 h-4 text-rose-500" />,
  info: <Info className="w-4 h-4 text-blue-500" />,
};

function Notification() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState("all");

  const unreadCount = useMemo(
    () => notifications.filter(n => !n.read).length,
    [notifications]
  );

  const filtered = useMemo(() => {
    return notifications.filter(n => {
      if (activeFilter === "all") return true;
      if (activeFilter === "unread") return !n.read;
      return n.category === activeFilter;
    });
  }, [notifications, activeFilter]);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const clearAll = () => setNotifications([]);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Notifications
              </h1>
              <p className="text-sm text-gray-500">
                {unreadCount} unread
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={markAllAsRead}
              className="text-sm px-3 py-1.5 rounded-md bg-white border hover:bg-gray-50"
            >
              <Check className="w-4 h-4 inline mr-1" />
              Mark all
            </button>

            <button
              onClick={clearAll}
              className="text-sm px-3 py-1.5 rounded-md bg-white border text-rose-600 hover:bg-rose-50"
            >
              <Trash2 className="w-4 h-4 inline mr-1" />
              Clear
            </button>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex gap-2 mb-8">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 text-sm rounded-full capitalize ${
                activeFilter === f
                  ? "bg-gray-900 text-white"
                  : "bg-white border text-gray-600 hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* LIST */}
        <div className="bg-white rounded-xl divide-y">
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-gray-500">
              No notifications
            </div>
          ) : (
            filtered.map(n => (
              <div
                key={n.id}
                className="flex gap-4 px-6 py-4 hover:bg-gray-50 transition"
              >
                {/* UNREAD INDICATOR */}
                <div className="pt-2">
                  {!n.read && (
                    <span className="block w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </div>

                {/* ICON */}
                <div className="pt-1">
                  {ICON[n.type]}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3
                      className={`text-sm ${
                        n.read ? "font-medium" : "font-semibold"
                      } text-gray-900`}
                    >
                      {n.title}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {n.time}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mt-1">
                    {n.message}
                  </p>

                  {!n.read && (
                    <button
                      onClick={() => markAsRead(n.id)}
                      className="mt-1.5 text-xs font-medium text-blue-600"
                    >
                      Mark as read
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default Notification;

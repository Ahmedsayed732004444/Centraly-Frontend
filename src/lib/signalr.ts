import * as signalR from "@microsoft/signalr";
import { storage } from "@/lib/storage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://localhost:7073";
// The backend maps the hub at "/hubs/notifications" off the API host root (see
// Program.cs) - not under whatever base path VITE_API_BASE_URL happens to include.
const HUB_URL = `${BASE_URL.replace(/\/api\/?$/, "")}/hubs/notifications`;

// One shared connection for the whole app (not one per component) so multiple
// mounted components can all listen without opening duplicate sockets.
let connection: signalR.HubConnection | null = null;

export function getNotificationConnection(): signalR.HubConnection {
  if (!connection) {
    connection = new signalR.HubConnectionBuilder()
      .withUrl(HUB_URL, {
        // Matches the backend's JwtBearer OnMessageReceived handler, which only reads
        // the token from the query string for paths under /hubs.
        accessTokenFactory: () => storage.getToken() ?? "",
      })
      .withAutomaticReconnect()
      .build();
  }
  return connection;
}

export async function stopNotificationConnection(): Promise<void> {
  if (connection) {
    await connection.stop();
    connection = null;
  }
}

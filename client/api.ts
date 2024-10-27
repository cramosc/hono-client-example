import { hc } from "hono/client";
import { App } from "../server/app";

export const apiClient = hc<App>(window.location.origin);

const api = apiClient.api;

import AppConfig from "~/config";

export default function api(resource) {
  return `${AppConfig.API_HOST}${resource}`;
}

import { notifyError } from "../../components/NotifyButton";

export function logRequestError(e) {
  if (e.data && e.data.message) notifyError(e.data.message);
  else console.log(e);
}

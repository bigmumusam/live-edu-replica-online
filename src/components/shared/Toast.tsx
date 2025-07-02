import { toast } from "sonner";

export const showToast = {
  success: (message: string) => {
    toast.success(message, {
      position: "top-center",
      duration: 2000,
    });
  },
  error: (message: string) => {
    toast.error(message, {
      position: "top-center", 
      duration: 2000,
    });
  },
  info: (message: string) => {
    toast.info(message, {
      position: "top-center",
      duration: 2000,
    });
  }
};
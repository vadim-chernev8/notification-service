import { toast, ToastContent, ToastOptions, Bounce, Id } from "react-toastify";


export const defaultToastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
};

type ToastType = "success" | "error" | "info" | "warning" | "default";

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = (
    type: ToastType,
    content: ToastContent,
    options: Partial<ToastOptions> = {},
): Id => {
    const optionsToApply = { ...defaultToastOptions, ...options };

    switch (type) {
        case "success":
            return toast(content, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,              
            });
        case "error":
            return toast.error(content, optionsToApply);
        case "info":
            return toast.info(content, optionsToApply);
        case "warning":
            return toast.warn(content, optionsToApply);
        case "default":
            return toast(content, optionsToApply);
        default:
            return toast(content, optionsToApply);
    }
};
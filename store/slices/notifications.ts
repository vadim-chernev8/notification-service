import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationsState {
    notifications: Notification[];
    newNotifications: Notification[];
    nextNotificationId: string | undefined;
    pageNotificationsId: string | null;
    totalPages: number | null;
}

export interface Notification {
    id: string;
    content: string;
    title: string;
    created: string;
}

const initialState: NotificationsState = {
    notifications: [],
    newNotifications: [],
    nextNotificationId: undefined,
    pageNotificationsId: null,
    totalPages: null,
};

interface AddNotificationsPayload {
    notifications: Notification[];
    newNotifications?: Notification[];
    nextNotificationId?: string | undefined;
    totalPages: number | null;
};
  
interface DeleteNotificationPayload {
    id: string;
};

interface PageChangeNotificationPayload {
    nextNotificationId?: string;
};
const counterSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotifications: (state, action: PayloadAction<AddNotificationsPayload>) => {
            const existingIds = new Set(state.notifications.map((item) => item.id));
            const filteredNewItems = action.payload.notifications.filter(
                (item) => !existingIds.has(item.id)
            );

            return {
                ...state,
                notifications: [...action.payload.notifications],
                newNotifications: [...filteredNewItems],
                nextNotificationId: action.payload.nextNotificationId,
                totalPages: action.payload.totalPages,
            };
        },
        pageChange: (state, action: PayloadAction<PageChangeNotificationPayload>) => {
            if (!action.payload.nextNotificationId) {
                return ({
                    ...state,
                    pageNotificationsId: null,
                }); 
            }
            
            return ({
                ...state,
                pageNotificationsId: action.payload.nextNotificationId,
            });
        },
        deleteNotification: (state, action: PayloadAction<DeleteNotificationPayload>) => {
            const [newNotification] = state.newNotifications;
            return ({
                ...state,
                notifications: [...state.notifications.filter(item => item.id != action.payload.id)],
                ...(action.payload.id === newNotification?.id ? { newNotifications: [] } : { newNotifications: state.newNotifications }),
            })
        }
    },
});

export const { addNotifications, deleteNotification, pageChange } = counterSlice.actions;
export default counterSlice.reducer;

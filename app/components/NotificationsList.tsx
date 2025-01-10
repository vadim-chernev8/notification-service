'use client';
import { useCallback, useEffect, useState } from 'react';
import { Flex, Button, Dialog, Box, Text, Spinner } from "@radix-ui/themes";
import { useDispatch, useSelector } from 'react-redux';

import {
    addNotifications as setNotificationsAction,
    deleteNotification as deleteNotificationAction,
    pageChange as pageChangeAction,
} from '../../store/slices/notifications';

import Pagination from './Pagination';
import NotificationForm from './NotificationForm';
import NotificationItem from './NotificationItem';
import { ExampleNotificationService } from '../../notification-service-mock/example-notification-service';
import { RootState } from '../../lib/store';
import { showToast } from '../../components/toast';

const notificationService = new ExampleNotificationService();

interface Notification {
    id: string;
    title: string;
    content: string;
    created: string;
};
  
export default function NotificationsList () {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const { notifications: notificationsList, newNotifications, nextNotificationId, pageNotificationsId } = useSelector((state: RootState) => state.notification);
    
    const getNotifications = async () => {
        try {
            const notifications = await notificationService.getNotifications({
                ...(pageNotificationsId ? { startWithNotificationId: pageNotificationsId } : {}),
            });
            dispatch(setNotificationsAction({
                notifications: notifications.notifications.map(item => ({ ...item, created: item.created.toString()})),
                nextNotificationId: notifications.nextNotificationId,
                totalPages: Math.ceil(notifications.total / notifications.notifications.length),
            }));   

        } catch (err) {
            showToast('error', 'Oppps Error occured due notification request !');
        }
    };

    useEffect(() => {
        const [newNotification] = newNotifications;
        if(newNotification) {
            showToast('success', (
                <div className='flex'>
                    <span>🦄</span>
                    <div className='ml-2 flex flex-col'>
                        <p>{newNotification.title}</p>
                        <p>{newNotification.content}</p>
                    </div>
                </div>
            ));
        } 
    }, [newNotifications])

    useEffect(() => {
        let interval;

        interval = setInterval(() => {
            getNotifications();
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [pageNotificationsId]);

    const publishNotification = useCallback(() => {
        async (data: Pick<Notification, 'title' | 'content'>) => {
            try {
                await notificationService.publishNotification(data);
                setOpen(false);
            } catch (err) {
                showToast('error', 'Oppps Error occured due to create notification request !'); 
            }    
        }
    }, []);

    const onPageChange = useCallback((nextNotificationId: string) => {
        dispatch(pageChangeAction({ nextNotificationId }));
    }, []);

    const handleNewNotifications = useCallback(() => {
        dispatch(pageChangeAction({}));
    }, []);

    const deleteNotification = useCallback(async (id: string) => {
        try {     
            await notificationService.deleteNotification({id});
        } catch (err) {
            showToast('error', 'Oppps Error occured due to delete notification request !');
        }  
    }, []);

    return (
        <Flex>
            <Flex px="6" className='fixed bg-white h-screen -mt-[94px]' justify="center" align="center">
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger>
                        <Button variant="surface" size="3" color='sky'>
                            <Text>Publish notification</Text>
                        </Button>
                    </Dialog.Trigger>

                    <Dialog.Content maxWidth="450px" align="center">
                        <Dialog.Title>
                            <Text as="div" align="center" className="w-full">Add Notification</Text>
                        </Dialog.Title>
                        <NotificationForm onSubmit={publishNotification} />
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>
            
            <Flex direction="column" gap="3" width="600px" ml="400px" className='min-h-screen'>
                {!notificationsList.length ? (
                    <Flex align="center" justify="center" width="600px" className='min-h-[400px]'>
                        <Spinner size="3" />
                    </Flex>
                ) : (
                    <>
                        <Flex width="100%" direction="column" gap="2" className='relative'>
                            {/* {loading ? <Spinner size="3" className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 right-0 bottom-0 z-[99]' /> : null} */}
                            {notificationsList.map((item) => {
                                return (
                                    <Box width="100%" key={item.id} >
                                        <NotificationItem
                                            title={item.title}
                                            content={item.content}
                                            id={item.id}
                                            created={item.created}
                                            deleteNotification={deleteNotification}
                                        />
                                    </Box>
                                );
                            })}
                        </Flex>
                        <Flex gap="3" justify="center" py="3">
                            <Button variant="surface" color="blue" onClick={handleNewNotifications}>New Notifications</Button>
                            {nextNotificationId ? <Button variant="surface" color="blue" onClick={() => onPageChange(nextNotificationId)}>Previouse notifications</Button> : null}
                        </Flex>
                    </>
                )}
            </Flex>
        </Flex>
    );
}
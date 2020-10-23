import * as Notifications from 'expo-notifications';


class Notification {
    static setScheduledLocalNotification(data){
        Notifications.cancelAllScheduledNotificationsAsync();
        const notification = {
            title:`Kazidomi`,
            body:`Dernier Article sorti à lire : ${data}`,
            ios:{
                sound:true,
            },
            android:{
                sound: true,
                vibrate:true,
            }
        };
        const schedulingOptions={
            time:(new Date()).getTime() +1000 * 60,
            repeat:"minute"
        };
        Notifications.setScheduledLocalNotificationAsync(notification,schedulingOptions)   
    }
    static listenNotification(){
        Notification.addListener(notification=>{
            console.log('notification has been received',notification);
        })
    }
}

export default Notification;
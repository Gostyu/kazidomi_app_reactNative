import { Notifications } from 'expo';


class Notification {
    static _setScheduledLocalNotification(data){
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
            time:(new Date()).getMinutes() +1 * 2, 
            repeat:'minute'
        };
        Notifications.scheduleLocalNotificationAsync(notification,schedulingOptions);
    }
    static listenNotification(){
        Notifications.addListener(notification=>{
            console.log('notification has been received',notification);
        })
    }
}

export default Notification;
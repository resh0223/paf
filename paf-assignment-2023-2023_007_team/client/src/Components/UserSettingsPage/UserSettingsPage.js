import React from 'react'
import css from './UserSettingsPage.module.css'


const UserSettingsPage = () => {

    const data = [
       
    ]

  return <div className={css.outerDiv}>
   
    <div className={css.innerDiv}>
        <div className={css.bdy}>
            <div className={css.header}>
                <div className={css.LHeader}>
                    <div className={css.ttl}>Notification Preferences</div>
                    <div className={css.tag}>Receive updates related to order status, promo codes and more</div>
                </div>
                <div className={css.RHeader}>
                    <GrayBtn txt="Save" />
                </div>
            </div>
            <div className={css.settingsBdy}>
            <div className={css.checkBoxesTtl}>
                <div className={css.chbkTtl}>Push</div>
                <div className={css.chbkTtl}>Email</div>
                <div className={css.chbkTtl}>Whatsapp</div>
            </div>
                {data?.map((item, id)=>{
                    return <div>
                        <NotificationSettingsUtil key={id} txt={item.txt} tag={item.tag} push={item.push} email={item.email} whatsapp={item.whatsapp} />
                        {data?.length - 1 !== id ? <hr className={css.hr} /> : ""}
                    </div>
                })}
            </div>
        </div>
    </div>
   
  </div>
}

export default UserSettingsPage
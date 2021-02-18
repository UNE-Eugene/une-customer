import * as React from 'react';
import { View, Text, Image, Button } from 'remax/wechat';
import styles from './personal.css';

export default () => {

  const [number, setNumber] = React.useState(520);
  const [Username, setUsername] = React.useState('点击登录')
  const [UserAvatar, setUserAvatar] = React.useState('https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/logo.png')
  return (
    <View className={styles.div}>
      <View className={styles.personBackground}>
        <Image style={{
          width: '100%',
          height: '100%',
        }} src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/personal-background.png' />
        <Button className={styles.personHeader}
          open-type='getUserInfo'

          onClick={() => {
            wx.getSetting({
              success(res) {
                if (res.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  wx.getUserInfo({
                    success: function (res) {
                      setUsername(res.userInfo.nickName)
                      setUserAvatar(res.userInfo.avatarUrl)
                    }
                  })
                }
              }
            })
          }}>
          <View className={styles.personImg}>
            <Image src={UserAvatar} />
          </View>
          <View className={styles.workerNumber}>
            <Text>{Username}</Text>
          </View>
        </Button>
      </View>

      <View className={styles.personContent} onClick={() => { setNumber(Math.ceil(Math.random() * 10)) }} style={{ top: '35%' }}>
        <img className={styles.icon} src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/settings.png' />
        <Text className={styles.personText}>权限管理</Text>
      </View>
      <View className={styles.personContent} onClick={() => { setNumber(Math.ceil(Math.random() * 10)) }} style={{ top: '45%' }}>
        <img className={styles.icon} src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/log.png' />
        <Text className={styles.personText}>日志管理</Text>
      </View>
      <View className={styles.personContent} onClick={() => { setNumber(Math.ceil(Math.random() * 10)) }} style={{ top: '55%' }}>
        <img className={styles.icon} src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/lock.png' />
        <Text className={styles.personText}>修改密码</Text>
      </View>
      <View className={styles.personContent} onClick={() => { setNumber(Math.ceil(Math.random() * 10)) }} style={{ top: '65%' }}>
        <img className={styles.icon} src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/mine.png' />
        <Text className={styles.personText}>个人信息</Text>
      </View>
      <View className={styles.personContent} onClick={() => { setNumber(Math.ceil(Math.random() * 10)) }} style={{ top: '75%' }}>
        <img className={styles.icon} src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/quit.png' />
        <Text className={styles.personText}>退出登录</Text>
      </View>
    </View>
  )
}
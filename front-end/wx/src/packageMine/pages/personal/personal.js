import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './personal.css';

export default () => {

  const [number, setNumber] = React.useState(520);

  return (
    <View className={styles.div}>
      <View className={styles.personBackground}>
        <Image style={{
          width: '100%',
          height: '100%',
        }} src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/personal-background.png' />
        <View className={styles.personHeader}>
          <View className={styles.personImg}>
            <Image src='https://test-1301787690.cos.ap-shanghai.myqcloud.com/%E9%85%92%E5%BA%97%E8%B5%84%E6%96%99/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E7%91%9E%E5%8D%8E%E9%85%92%E5%BA%97/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E7%91%9E%E5%8D%8E%E9%85%92%E5%BA%97_2.jpg' />
          </View>
          <View className={styles.workerNumber}>
            <Text >{number}</Text>
          </View>
        </View>
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
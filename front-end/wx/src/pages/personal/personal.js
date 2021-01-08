import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './personal.css';
import lock from '../static/lock.png';
import settings from '../static/settings.png';
import quit from '../static/quit.png';
import log from '../static/log.png';
import mine from '../static/mine.png';
import personBackground from '../static/personal-background.png'


export default () => {

  const [number, setNumber] = React.useState(520);

  return (
    <View className={styles.div}>
      <View className={styles.personBackground}>
        <Image style={{
          width: '100%',
          height: '100%',
        }} src={personBackground} />
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
        <img className={styles.icon} src={settings} />
        <Text className={styles.personText}>权限管理</Text>
      </View>
      <View className={styles.personContent} onClick={() => { setNumber(Math.ceil(Math.random() * 10)) }} style={{ top: '45%' }}>
        <img className={styles.icon} src={log} />
        <Text className={styles.personText}>日志管理</Text>
      </View>
      <View className={styles.personContent} onClick={() => { setNumber(Math.ceil(Math.random() * 10)) }} style={{ top: '55%' }}>
        <img className={styles.icon} src={lock} />
        <Text className={styles.personText}>修改密码</Text>
      </View>
      <View className={styles.personContent} onClick={() => { setNumber(Math.ceil(Math.random() * 10)) }} style={{ top: '65%' }}>
        <img className={styles.icon} src={mine} />
        <Text className={styles.personText}>个人信息</Text>
      </View>
      <View className={styles.personContent} onClick={() => { setNumber(Math.ceil(Math.random() * 10)) }} style={{ top: '75%' }}>
        <img className={styles.icon} src={quit} />
        <Text className={styles.personText}>退出登录</Text>
      </View>
    </View>
  )
}
import * as React from 'react';
import { View, Text, Image, Button, Input } from 'remax/wechat';
import styles from './index.css';
import Background from '../static/bg.png'
import Logo from '../../../public/logo.png'
import UserLogo from '../static/icon1.png'
import PassLogo from '../static/icon2.png'

export default () => {
  return (
    <View className={styles.app}>
      <Image src={Background} className={styles.background} />
      <View className={styles.header}>

        <Image src={Logo} className={styles.logo} />
      </View>
      <View className={styles.content}>
      <View className={styles.card}>
        <Text className={styles.title}>登 录</Text>
        <view className={styles.username}>
          <Image src={UserLogo} ></Image>
          <Input placeholder='用户名' placeholderClassName={styles.placeholder} confirm-type='登录' type='text'/>
        </view>
        <view className={styles.password}>
          <Image src={PassLogo} ></Image>
          <Input placeholder='密码' placeholderClassName={styles.placeholder} confirm-type='登录' type='password'/>
        </view>
        <Button className={styles.button}>登录</Button>
      </View>
      </View>
    </View>
    
  );
};

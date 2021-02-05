import * as React from 'react';
import { View, Text, Image, Button, Input } from 'remax/wechat';
import styles from './login.css';

export default () => {
  return (
    <View className={styles.app}>
      <Image src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/bg.png' className={styles.background} />
      <View className={styles.header}>
        <Image src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/logo.png' className={styles.logo} />
      </View>
      <View className={styles.content}>
      <View className={styles.card}>
        <Text className={styles.title}>登 录</Text>
        <view className={styles.username}>
          <Image src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/icon1.png' ></Image>
          <Input placeholder='用户名' placeholderClassName={styles.placeholder} confirm-type='登录' type='text'/>
        </view>
        <view className={styles.password}>
          <Image src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/icon2.png' ></Image>
          <Input placeholder='密码' placeholderClassName={styles.placeholder} confirm-type='登录' type='password'/>
        </view>
        <Button className={styles.button}>登录</Button>
      </View>
      </View>
    </View>
    
  );
};

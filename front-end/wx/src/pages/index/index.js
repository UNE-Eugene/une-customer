import * as React from 'react';
import { View, Text, Image, Button } from 'remax/wechat';
import styles from './index.css';
import Background from '../static/bg.png'
import Logo from '../../../public/logo.png'


export default () => {
  return (
    <View className={styles.app}>
      <Image src={Background} className={styles.background} />
      <View className={styles.header}>
        <Image src={Logo} className={styles.logo} />
      </View>
      <View className={styles.card}>
        <Text className={styles.title}>登 录</Text>
      </View>
    </View>
  );
};

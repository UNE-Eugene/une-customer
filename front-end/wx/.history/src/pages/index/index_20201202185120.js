import * as React from 'react';
import { View, Text, Image, Button } from 'remax/wechat';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          <Button onClick={()=>{alert('You Click Me !')}}>test</Button>
          开始
        </View>
      </View>
    </View>
  );
};
